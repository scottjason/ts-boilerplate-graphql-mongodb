import { gql } from '@apollo/client';

export const GET_USER_BY_EMAIL = gql`
  query GetUserByEmail($email: String!) {
    getUserByEmail(input: { email: $email }) {
      _id
    }
  }
`;

export const IS_AUTHENTICATED = gql`
  query IsAuthenticated {
    isAuthenticated {
      status
    }
  }
`;
