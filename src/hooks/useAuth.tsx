import * as React from 'react';
import { useQuery } from '@apollo/client';
import { IS_AUTHENTICATED } from '../graphql/queries';

type Props = {
  children: JSX.Element;
};

const authContext = React.createContext(null);

export function ProvideAuth({ children }: Props) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export const useAuth = () => {
  return React.useContext(authContext);
};

function useProvideAuth() {
  const [user, setUser] = React.useState(null);
  const { error, data } = useQuery(IS_AUTHENTICATED);
  React.useEffect(() => {
    if (data?.isAuthenticated?.status) {
      if (data?.isAuthenticated.status === 200) {
        setUser({
          isFetched: true,
          isAuthenticated: true,
        });
      } else {
        setUser({
          isFetched: true,
          isAuthenticated: false,
        });
      }
    }
  }, [error, data]);
  return {
    ...user,
  };
}
