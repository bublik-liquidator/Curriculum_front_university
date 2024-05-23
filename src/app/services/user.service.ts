import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environment';
import { IUser } from '../models/user';
import { ISearchUsersResponse } from '../models/searchUsersResponse';
interface IcreateUser {
  message: string;
}
interface IUserResponse {
  users: IUser[];
  total: number;
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}
  getUsersForCurriculas(page = 1, limit =Number.MAX_SAFE_INTEGER): Observable<IUserResponse> {
    const body = {
      page: page.toString(),
      limit: limit.toString(),
    };
    return this.http.post<IUserResponse>(
      `${environment.serverUrl}/user/get-users`,
      body
    );
  }

  searchUsers(
    searchQuery: string,
    page: number,
    limit: number
  ): Observable<ISearchUsersResponse> {
    const body = {
      search: searchQuery,
      limit: limit.toString(),
      page: page.toString(),
    };
    return this.http.post<ISearchUsersResponse>(
      `${environment.serverUrl}/user/search-users`,
      body
    );
  }

  getUsersForUserComponent(page = 1, limit = 10): Observable<IUserResponse> {
    const body = {
      page: page.toString(),
      limit: limit.toString(),
    };
    return this.http.post<IUserResponse>(
      `${environment.serverUrl}/user/get-users`,
      body
    );
  }

  getUserById(userId: number): Observable<IUser> {
    return this.http.get<IUser>(
      `${environment.serverUrl}/user/get-user/${userId}`
    );
  }

  updateUserById(userId: number, userData: IUser): Observable<IUser> {
    return this.http.put<IUser>(
      `${environment.serverUrl}/user/update-user/${userId}`,
      userData
    );
  }

  createUser(user: IUser): Observable<IcreateUser> {
    return this.http.post<IcreateUser>(
      `${environment.serverUrl}/user/create-user`,
      user
    );
  }

  deleteUser(userId: number): Observable<IUser> {
    return this.http.delete<IUser>(
      `${environment.serverUrl}/user/delete-user/${userId}`
    );
  }
}
