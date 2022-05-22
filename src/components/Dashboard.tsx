import * as React from 'react';
import { useAuth } from '../hooks/useAuth';
import { useMutation } from '@apollo/client';
import { SIGN_OUT_USER } from '../graphql/mutations';
import { Container, Heading } from '../styles/Dashboard.style';
import { NextButton, ButtonWrap } from '../styles/Authenticate.style';

export const Dashboard = (): JSX.Element => {
  const auth = useAuth();
  const [isLoaded, setIsLoaded] = React.useState<boolean>(false);

  const redirect = (path: string) => (window.location.href = path);

  const [signOutUser] = useMutation(SIGN_OUT_USER, {
    onCompleted: (): void => {
      redirect('/');
    },
  });

  React.useEffect(() => {
    if (auth.isFetched && auth.isAuthenticated) {
      setIsLoaded(true);
    } else if (auth.isFetched) {
      redirect('/');
    }
  }, [auth]);
  return (
    <>
      {!isLoaded && null}
      {isLoaded && (
        <Container>
          <Heading className='animate__animated animate__fadeInDown'>
            Authenticated
          </Heading>
          <ButtonWrap style={{ width: 'unset' }}>
            <NextButton onClick={() => signOutUser()}>Sign Out</NextButton>
          </ButtonWrap>
        </Container>
      )}
    </>
  );
};
