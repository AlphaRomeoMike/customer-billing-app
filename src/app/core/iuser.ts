export interface IUser {
  id?: number;
  name: string;
  email?: string;
  email_verified_at?: string;
  token?: string
  role?: string;
  created_at?: string;
  updated_at?: string;
}

export interface IRegister {
  data?: IUser;
  success?: boolean
  message?: string
  status?: string
  error?: any
}

export interface ILogin {
  data?: IUser;
  success?: boolean
  message?: string
  status?: string
  error?: any
}