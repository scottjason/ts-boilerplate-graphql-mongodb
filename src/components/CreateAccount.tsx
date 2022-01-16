import * as React from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import { CREATE_USER } from '../graphql/mutations';
import { IEnterPassword } from '../types/authenticateTypes';

import {
  Form,
  Email,
  NextButton,
  ButtonWrap,
  Heading,
  Container,
  InputField,
  HeadingWrap,
  PasswordError,
} from '../styles/Authenticate.style';

interface IProps {
  email: string;
}

export const CreateAccount = ({ email }: IProps) => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [createUser] = useMutation(CREATE_USER, {
    onCompleted: res => {
      console.log('res', res);
      const {
        createUser: { token },
      } = res;
      if (token) {
        navigate('/dashboard');
      }
    },
    onError: err => {
      console.log('create account error', err.message);
    },
  });

  const onSubmit = ({ password }: IEnterPassword) => {
    createUser({ variables: { email, password } });
  };

  return (
    <Container>
      <HeadingWrap>
        <Heading isWelcome={false}>Enter Password to Register</Heading>
        <Email>{email}</Email>
      </HeadingWrap>
      <Form>
        <InputField
          type="password"
          pushDown={true}
          placeholder="Enter Password"
          {...register('password', { required: true })}
          {...register('password', {
            required: 'Enter Password',
            pattern: {
              value: /^(?=.*?[a-z]).{8,}$/,
              message: 'Enter a valid password',
            },
          })}
        />
        {errors.password && (
          <PasswordError>
            Password must be at least 8 characters, uppercase and lowercase.
          </PasswordError>
        )}
        <ButtonWrap>
          <NextButton onClick={handleSubmit(onSubmit)}>
            Create Account
          </NextButton>
        </ButtonWrap>
      </Form>
    </Container>
  );
};
