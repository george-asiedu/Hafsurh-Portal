import { AdminState } from '../../admin/store/admin.state';
import {AuthState} from '../../auth/store/auth.state';

export interface Register {
  name: string;
  email: string;
  password: string;
}

export interface Signin {
  email: string;
  password: string;
}

export interface VerifyAccount {
  code: string;
}

export interface RegisterResponse {
  message: "Success",
  data: {
    user: {
      id: 1,
      name: string,
      email: string,
      role: string,
      isVerified: boolean,
      programme: null,
      dob: null,
      phone: null,
      address: null,
      registered: boolean
    },
    token: string
  }
}

export interface SigninResponse {
  message: "Success",
  data: {
    accessToken: string;
    refreshToken: string;
    user: {
      id: 1,
      name: string,
      email: string,
      role: string,
      isVerified: boolean,
      programme: null,
      dob: null,
      phone: null,
      address: null,
      registered: boolean
    }
  }
}

export interface SuccessResponse {
  message: string;
}

export enum Roles {
  Admin = 'Admin',
  Student = 'Student',
}

export interface AppStore {
  auth: AuthState;
  admin: AdminState;
}
