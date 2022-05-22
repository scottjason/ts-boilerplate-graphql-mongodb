export interface IEnterEmail {
  email: string;
}

export interface IEnterPassword {
  password: string;
}

export type Session = {
  isAuthenticated?: boolean;
  redirectPath: string;
};
