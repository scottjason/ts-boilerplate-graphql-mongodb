import * as React from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from '@apollo/client';
import { CREATE_USER } from '../graphql/mutations';
import { IEnterPassword } from '../common/interfaces/form.interface';
import {
  ENTER_PASSWORD,
  PASSWORD_CRITERIA,
  LOWERCASE_PASSWORD,
  ENTER_VALID_PASSWORD,
  ENTER_PASSWORD_TO_REGISTER,
} from '../constants';

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

interface Props {
  email: string;
}

export const CreateAccount = ({ email }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [createUser] = useMutation(CREATE_USER, {
    onCompleted: (res): void => {
      const {
        createUser: { token },
      } = res;
      if (token) {
        window.location.href = '/dashboard';
      }
    },
    onError: (err): void => {
      console.log('create account error', err.message);
    },
  });

  const onSubmit = ({ password }: IEnterPassword): void => {
    createUser({ variables: { email, password } });
  };

  return (
    <Container>
      <HeadingWrap>
        <Heading isWelcome={false}>{ENTER_PASSWORD_TO_REGISTER}</Heading>
        <Email>{email}</Email>
      </HeadingWrap>
      <Form>
        <InputField
          type={LOWERCASE_PASSWORD}
          pushDown={true}
          placeholder={ENTER_PASSWORD}
          {...register(LOWERCASE_PASSWORD, { required: true })}
          {...register(LOWERCASE_PASSWORD, {
            required: ENTER_PASSWORD,
            pattern: {
              value: /^(?=.*?[a-z]).{8,}$/,
              message: ENTER_VALID_PASSWORD,
            },
          })}
        />
        {errors.password && <PasswordError>{PASSWORD_CRITERIA}</PasswordError>}
        <ButtonWrap>
          <NextButton onClick={handleSubmit(onSubmit)}>
            Create Account
          </NextButton>
        </ButtonWrap>
      </Form>
    </Container>
  );
};
