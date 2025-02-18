import { SigninResponse } from "../model/auth/auth";

export interface AppStoreState {
  isLoading: boolean;
  error: string | null;
  user: SigninResponse | null;
}
