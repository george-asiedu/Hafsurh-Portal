import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {
  Register,
  RegisterResponse,
  Signin,
  SigninResponse,
  SuccessResponse,
  VerifyAccount
} from '../../model/auth/auth';
import { Store } from '@ngrx/store';
import { AuthState } from '../store/auth.state';
import { selectRefreshToken } from '../store/auth.selectors';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private appUrl: string = environment.productionEnvironment;

  public constructor(private http: HttpClient, private store: Store<AuthState>) {}

  public register(user: Register) {
    return this.http.post<RegisterResponse>(`${this.appUrl}auth/register`, user);
  }

  public signin(user: Signin) {
    return this.http.post<SigninResponse>(`${this.appUrl}auth/signin`, user);
  }

  public verifyAccount(code: VerifyAccount, token: string) {
    return this.http.post<SuccessResponse>(`${this.appUrl}auth/verify-account?token=${token}`, code);
  }

  public refreshToken() {
  const token = this.store.selectSignal(selectRefreshToken);
    return this.http.post<SigninResponse>(
      `${this.appUrl}auth/refresh-token`,
      { refreshToken: token() }
    );
  }
}
