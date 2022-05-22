import * as React from 'react';
import { useQuery } from '@apollo/client';
import { IS_AUTHENTICATED } from '../graphql/queries';

interface Props {
  children: JSX.Element;
}

interface User {
  isFetched: boolean;
  isAuthenticated: boolean;
}

const intitialState = {
  isFetched: false,
  isAuthenticated: false,
};

const authContext = React.createContext(null);

export function ProvideAuth({ children }: Props) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export const useAuth = () => {
  return React.useContext(authContext);
};

function useProvideAuth(): User {
  const [user, setUser] = React.useState<User>(intitialState);
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
