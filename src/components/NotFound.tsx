import * as React from 'react';
import { Container, Heading } from '../styles/Dashboard.style';
import { NextButton, ButtonWrap } from '../styles/Authenticate.style';

export const NotFound = (): JSX.Element => {
  return (
    <>
      <Container>
        <Heading>Page Not Found</Heading>
        <ButtonWrap style={{ width: 'unset' }}>
          <NextButton onClick={() => (window.location.href = '/')}>
            Back to Login
          </NextButton>
        </ButtonWrap>
      </Container>
    </>
  );
};
