import * as React from 'react';
import { useNavigate } from 'react-router';
import { Container, Heading } from '../styles/Dashboard.style';
import { NextButton, ButtonWrap } from '../styles/Authenticate.style';

export const NotFound: React.FC = () => {
  const navigagte = useNavigate();
  return (
    <>
      <Container>
        <Heading>Page Not Found</Heading>
        <ButtonWrap style={{ width: 'unset' }}>
          <NextButton onClick={() => navigagte('/')}>Back to Login</NextButton>
        </ButtonWrap>
      </Container>
    </>
  );
};
