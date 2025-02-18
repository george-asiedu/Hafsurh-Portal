import {RegisterResponse, SigninResponse, SuccessResponse} from '../../model/auth/auth';

export interface AuthState {
  isLoading: boolean;
  data: { type: 'register'; response: RegisterResponse } |
    { type: 'signin'; response: SigninResponse } |
    { type: 'refreshToken'; response: SigninResponse } | null;
  message: SuccessResponse | null;
  error: string | null;
}
