import * as React from 'react';
import { useForm } from 'react-hook-form';
import { useLazyQuery } from '@apollo/client';
import { GET_USER_BY_EMAIL } from '../graphql/queries';
import { IEnterEmail } from '../types/authenticateTypes';

import {
  Form,
  NextButton,
  ButtonWrap,
  Heading,
  Container,
  HeadingWrap,
  EmailError,
  InputFieldEmail,
} from '../styles/Authenticate.style';

interface IProps {
  onToggleView: (type: string, email: string) => void;
}

export const EnterEmail: React.FC<IProps> = ({ onToggleView }: IProps) => {
  const [email, setEmail] = React.useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [getUserByEmail] = useLazyQuery(GET_USER_BY_EMAIL, {
    onCompleted: res => {
      const isRegistered = !!res.getUserByEmail;
      if (!isRegistered) {
        onToggleView('create-account', email);
      } else {
        onToggleView('sign-in', email);
      }
    },
    onError: err => {
      console.log('get user by email error', err);
    },
  });

  const onSubmit = ({ email }: IEnterEmail) => {
    setEmail(email);
    getUserByEmail({ variables: { email } });
  };

  return (
    <Container>
      <HeadingWrap>
        <Heading isWelcome={false}>Enter your email</Heading>
      </HeadingWrap>
      <Form>
        <InputFieldEmail
          type="email"
          placeholder="Enter Email"
          {...register('email', {
            required: 'Enter Email',
            pattern: {
              value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: 'Enter a valid email',
            },
          })}
        />
        {errors.email && <EmailError>Enter a valid email</EmailError>}
        <ButtonWrap>
          <NextButton onClick={handleSubmit(onSubmit)}>NEXT</NextButton>
        </ButtonWrap>
      </Form>
    </Container>
  );
};
