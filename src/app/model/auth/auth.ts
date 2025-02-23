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
      id: string;
      name: string;
      email: string;
      role: string;
      isVerified: boolean;
      programme: null;
      dob: null;
      phone: null;
      address: null;
      registered: boolean;
    },
    token: string;
  }
}

export interface SigninResponse {
  message: "Success",
  data: {
    accessToken: string;
    refreshToken: string;
    user: {
      id: string;
      name: string;
      email: string;
      role: string;
      isVerified: boolean;
      programme: string | null;
      dob: string | null;
      phone: string | null;
      address: string | null;
    }
  }
}

export interface SuccessResponse {
  message: string;
}

export interface RefreshTokenResponse {
  message: string;
  data: {
    accessToken: string;
    refreshToken: string;
  }
}

export enum Roles {
  Admin = 'Admin',
  Student = 'Student',
}

export interface AppStore {
  auth: AuthState;
  admin: AdminState;
}
