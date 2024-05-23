import { IUser } from './user';

export interface ISearchUsersResponse {
  users: IUser[];
  total: number;
}
