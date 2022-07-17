export interface IUser {
    id: string;
    username: string;
    password: string;
    roles: string[];
    permissions: string[];
  }
  export interface IRegisterUserInput {
    registerUserInput: {
      username: string;
      password: string;
      firstname: string;
      lastname: string;
    };
  }
  export interface ILoginUserInput {
    loginUserInput: {
      username: string;
      password: string;
    };
  }
  