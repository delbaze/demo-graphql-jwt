import { gql } from "@apollo/client";

export const REGISTER = gql`
mutation Register($registerUserInput: RegisterUserInput) {
  register(registerUserInput: $registerUserInput) {
    id
    username
    firstname
    lastname
    roles
    permissions
    success
  }
}
`;

export const LOGOUT = gql`
  query Logout {
    logout {
      success
    }
  }
`;

export const LOGIN = gql`
  query Login($loginUserInput: LoginInput) {
    login(loginUserInput: $loginUserInput) {
      id
      username
      firstname
      lastname
      roles
      permissions
      success
    }
  }
`;