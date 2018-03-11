export interface User {
  email: string;
  account: {
    password: string;
    confirm: string;
  };
}
