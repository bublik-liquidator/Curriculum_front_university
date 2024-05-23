import { Component, OnDestroy, OnInit } from '@angular/core';
import { IUser } from '../../models/user';
import { UserService } from '../../services/user.service';
import {
  Observable,
  Subject,
  catchError,
  filter,
  map,
  of,
  switchMap,
  takeUntil,
  tap,
  throwError,
} from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { TableComponent } from '../../shared-components/table/table.component';
import { ITableData } from '../../models/table';
import {
  MatDialogModule,
  MatDialog,
  MatDialogRef,
} from '@angular/material/dialog';
import { EditComponent } from '../../shared-components/edit/edit.component';
import { SearchComponent } from '../../shared-components/search/search.component';
import { ISearchUsersResponse } from '../../models/searchUsersResponse';

@Component({
  selector: 'user-content',
  standalone: true,
  providers: [UserService],
  imports: [
    HttpClientModule,
    TableComponent,
    EditComponent,
    MatDialogModule,
    SearchComponent,
  ],
  templateUrl: './user-content.component.html',
  styleUrl: './user-content.component.scss',
})
export class UserContentComponent implements OnInit, OnDestroy {
  users!: IUser[];
  tableData!: ITableData[];
  editUser!: IUser;
  totalCount!: number;
  currentSearchQuery: string = '';
  pageIndex: number = 1;

  private destroySubject = new Subject<void>();

  constructor(private userService: UserService, private dialog: MatDialog) {}

  ngOnInit() {
    this.getUsers(this.pageIndex, 10);
  }

  ngOnDestroy() {
    this.destroySubject.next();
    this.destroySubject.complete();
  }

  onPageChange(pageIndex: number = 1, data: string = '') {
    this.currentSearchQuery = data;
    this.pageIndex = pageIndex;
    this.userService
      .searchUsers(data, pageIndex, 10)
      .pipe(
        takeUntil(this.destroySubject),
        catchError((error) => {
          this.openModal(error.error);
          return of(null);
        })
      )
      .subscribe((response: ISearchUsersResponse | null) => {
        if (response) {
          this.users = response.users;
          this.totalCount = response.total;
          this.tableData = this.mapToTableData(response.users);
        }
      });
  }

  getUsers(pageIndex: number, limit: number) {
    this.userService
      .getUsersForUserComponent(pageIndex, limit)
      .pipe(
        takeUntil(this.destroySubject),
        catchError((error) => {
          this.openModal(error.error);
          return of(null);
        })
      )
      .subscribe((response) => {
        if (response) {
          this.users = response.users;
          this.totalCount = response.total;
          this.tableData = this.mapToTableData(response.users);
        }
      });
  }

  onEdit(id: number) {
    this.userService
      .getUserById(id)
      .pipe(
        switchMap((user) => {
          const fields = [
            {
              field: 'name',
              fieldName: 'Name',
              type: 'string',
              value: user.name,
            },
            {
              field: 'contact',
              fieldName: 'Contact',
              type: 'string',
              value: user.contact,
            },
            {
              field: 'role',
              fieldName: 'Role',
              type: 'string',
              value: user.role,
            },
            {
              field: 'password',
              fieldName: 'Password',
              type: 'string',
              value: user.password,
            },
          ];
          const buttons = [
            { field: 'save-button ', type: 'submit', value: 'Save' },
            {
              field: 'cancel-button',
              fieldName: 'Cancel',
              type: 'button',
              value: 'Cancel',
              click: (): void => dialogRef.close(),
            },
          ];
          const dialogRef: MatDialogRef<EditComponent, IUser> =
            this.dialog.open(EditComponent, {
              data: {
                fields: fields,
                buttons: buttons,
              },
            });
          return dialogRef.afterClosed();
        }),
        filter(
          (updatedUser): updatedUser is IUser => updatedUser !== undefined
        ),
        catchError((error) => {
          this.openModal(error.error);
          console.error('Не удалось обновить пользователя', error);
          return throwError(error);
        }),
        takeUntil(this.destroySubject)
      )
      .subscribe((updatedUser: IUser) => {
        this.saveUser(updatedUser, id);
        this.getUsers(this.pageIndex, 10);
      });
  }

  getUserById(id: number): Observable<IUser> {
    return this.userService
      .getUserById(id)
      .pipe(takeUntil(this.destroySubject));
  }

  saveUser(updatedUser: IUser, id: number) {
    this.userService
      .updateUserById(id, updatedUser)
      .pipe(
        switchMap(() => {
          return this.openModal('Данные пользователя успешно обновлены');
        }),
        catchError((error) => {
          return this.openModal(error.error);
        }),
        takeUntil(this.destroySubject)
      )
      .subscribe();
  }

  openModal(message: string) {
    const dialogRef: MatDialogRef<EditComponent> = this.dialog.open(
      EditComponent,
      {
        data: {
          fields: [
            {
              field: 'name',
              type: 'info',
              value: message,
            },
          ],
        },
      }
    );
    return dialogRef.afterClosed().pipe(
      map(() => dialogRef),
      takeUntil(this.destroySubject)
    );
  }

  mapToTableData(data: IUser[]): ITableData[] {
    return data.map(({ name, contact, role, password, ...rest }) => ({
      Имя: name,
      Инфо: contact,
      Роль: role,
      Пароль: password,
      ...rest,
    }));
  }

  createUser() {
    const fields = [
      {
        field: 'name',
        fieldName: 'Name',
        type: 'string',
        value: 'user',
      },
      {
        field: 'contact',
        fieldName: 'Contact',
        type: 'string',
        value: 'user info',
      },
      {
        field: 'role',
        fieldName: 'Role',
        type: 'string',
        value: 'user',
      },
      {
        field: 'password',
        fieldName: 'Password',
        type: 'string',
        value: '',
      },
    ];
    const buttons = [
      {
        field: 'save-button ',
        type: 'submit',
        value: 'Create',
      },
      {
        field: 'cancel-button',
        fieldName: 'Cancel',
        type: 'button',
        value: 'Cancel',
        click: (): void => dialogRef.close(),
      },
    ];
    const dialogRef: MatDialogRef<EditComponent, IUser> = this.dialog.open(
      EditComponent,
      {
        data: {
          fields: fields,
          buttons: buttons,
        },
      }
    );

    dialogRef
      .afterClosed()
      .pipe(
        switchMap((newUser) => {
          if (newUser) {
            return this.userService.createUser(newUser).pipe(
              tap((info) => {
                return this.openModal(info.message);
              }),
              catchError((error) => {
                this.openModal(error.error);
                return of(null);
              })
            );
          } else {
            return of(null);
          }
        }),
        takeUntil(this.destroySubject)
      )
      .subscribe(() => {
        this.getUsers(this.pageIndex, 10);
      });
  }

  onDelete(id: number) {
    const fields = [
      {
        field: 'name',
        type: 'info',
        value: 'Вы точно хотите удалить этого пользователя?',
      },
    ];
    const buttons = [
      {
        field: 'save-button ',
        type: 'submit',
        value: 'Да',
      },
      {
        field: 'cancel-button',
        fieldName: 'Cancel',
        type: 'button',
        value: 'Нет',
        click: (): void => dialogRef.close(),
      },
    ];
    const dialogRef: MatDialogRef<EditComponent, IUser> = this.dialog.open(
      EditComponent,
      {
        data: {
          fields: fields,
          buttons: buttons,
        },
      }
    );

    dialogRef
      .afterClosed()
      .pipe(
        switchMap((info) => {
          if (info) {
            return this.userService.deleteUser(id).pipe(
              catchError((error) => {
                this.openModal(error.error);
                return of(null);
              })
            );
          } else {
            return of(null);
          }
        }),
        takeUntil(this.destroySubject)
      )
      .subscribe(() => {
        this.getUsers(this.pageIndex, 10);
      });
  }
}
