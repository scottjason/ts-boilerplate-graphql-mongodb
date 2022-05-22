import * as React from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from '@apollo/client';
import { SIGN_IN_USER } from '../graphql/mutations';
import { IEnterPassword } from '../common/interfaces/form.interface';

import {
  Form,
  Email,
  NextButton,
  ButtonWrap,
  Heading,
  Container,
  InputField,
  HeadingWrap,
} from '../styles/Authenticate.style';

interface IProps {
  email: string;
}

export const SignIn = ({ email }: IProps): JSX.Element => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [signInUser] = useMutation(SIGN_IN_USER, {
    onCompleted: (res: any) => {
      if (res?.signInUser.isAuthenticated) {
        window.location.href = '/dashboard';
      }
    },
    onError: (err: any) => {
      console.log('sign in error', err.message);
    },
  });

  const onSubmit = ({ password }: IEnterPassword) => {
    signInUser({ variables: { email, password } });
  };

  return (
    <Container>
      <>
        <HeadingWrap>
          <Heading isWelcome={true}>Welcome back</Heading>
          <Heading isWelcome={false}>Enter Password</Heading>
        </HeadingWrap>
        <Form>
          <Email>{email}</Email>
          <InputField
            type='password'
            pushDown={true}
            placeholder='Enter Password'
            {...register('password', { required: true })}
          />
          {errors.password && <p>Password is required.</p>}
        </Form>
        <ButtonWrap>
          <NextButton onClick={handleSubmit(onSubmit)}>Sign In</NextButton>
        </ButtonWrap>
      </>
    </Container>
  );
};
