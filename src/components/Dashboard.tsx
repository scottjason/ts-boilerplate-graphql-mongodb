import * as React from 'react';
import { useMutation } from '@apollo/client';
import { SIGN_OUT_USER } from '../graphql/mutations';
import { Container, Heading } from '../styles/Dashboard.style';
import { NextButton, ButtonWrap } from '../styles/Authenticate.style';

export const Dashboard: React.FC = () => {
  const [signOutUser] = useMutation(SIGN_OUT_USER, {
    onCompleted: () => {
      window.location.href = '/';
    },
  });
  return (
    <>
      <Container>
        <Heading className="animate__animated animate__fadeInDown">
          Authenticated
        </Heading>
        <ButtonWrap style={{ width: 'unset' }}>
          <NextButton onClick={() => signOutUser()}>Sign Out</NextButton>
        </ButtonWrap>
      </Container>
    </>
  );
};
