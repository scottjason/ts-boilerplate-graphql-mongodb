import * as React from 'react';
import { useForm } from 'react-hook-form';
import { useLazyQuery } from '@apollo/client';
import { ENTER_EMAIL } from '../constants';
import { GET_USER_BY_EMAIL } from '../graphql/queries';
import { IEnterEmail } from '../common/interfaces/form.interface';

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
  const [email, setEmail] = React.useState<string>('');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [getUserByEmail] = useLazyQuery(GET_USER_BY_EMAIL, {
    onCompleted: res => {
      const isRegistered = !!res.getUserByEmail;
      if (!isRegistered) {
        onToggleView('createAccount', email);
      } else {
        onToggleView('signIn', email);
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
          type='email'
          placeholder={ENTER_EMAIL}
          {...register('email', {
            required: ENTER_EMAIL,
            pattern: {
              value:
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
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
