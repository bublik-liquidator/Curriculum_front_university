import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environment';
import { jwtDecode } from 'jwt-decode';

interface LoginResponse {
  token: string;
}

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  login(name: string, password: string): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(
      `${environment.serverUrl}/user/login`,
      {
        name,
        password,
      }
    );
  }

  checkToken(field: string) {
    const token = localStorage.getItem('token') || '';
    const decodedToken = jwtDecode(token) as {
      id: number;
      isAdmin: boolean;
      name: string;
      [key: string]: number | boolean | string;
    };
    return decodedToken[field];
  }
}
