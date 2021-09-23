import { HttpClient } from '@angular/common/http';
import { TagPlaceholder } from '@angular/compiler/src/i18n/i18n_ast';
import { CATCH_ERROR_VAR } from '@angular/compiler/src/output/output_ast';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { User } from './user.model';
import { Subject } from 'rxjs';
import { environment } from '../../environments/environment';

export interface authResponseData {
  idToken: string;
  refreshToken: string;
  expiresIn: string;
  registered?: boolean;
  email : string;
  localId : string
}

@Injectable({ providedIn: 'root' })
export class AuthService {
    user = new Subject<User>();

  constructor(private http: HttpClient) {}
  signup(email: string, password: string) {
    return this.http
      .post<authResponseData>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + environment.firebaseAPIKey,
        {
          email: email,
          password: password,
          returnSecureToken: true,
        }
      )
      .pipe(
        tap(resData => {
          const expirationDate = new Date(
            new Date().getTime() + +resData.expiresIn * 1000
          );
          const user = new User (
            resData.email,
            resData.localId,
            resData.idToken,
            expirationDate

            );
            this.user.next(user);
        })
      );
  }
  loginMethod(email: string, password: string) {
    return this.http.post<authResponseData>(
      'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' + environment.firebaseAPIKey,
      {
        email: email,
        password: password,
        returnSecureToken: true,
        
      }
    ) .pipe(
        tap(resData => {
          const expirationDate = new Date(
            new Date().getTime() + +resData.expiresIn * 10000
          );
          const user = new User (
              resData.email,
              resData.localId,
              resData.idToken,
              expirationDate

              );
              this.user.next(user);
        })
      );
  }
}
