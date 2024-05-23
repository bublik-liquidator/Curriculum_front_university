import { Component } from '@angular/core';
import { IStatus } from '../../models/status';
import { StatusService } from '../../services/status.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ITableData } from '../../models/table';
import {
  Subject,
  catchError,
  map,
  of,
  switchMap,
  takeUntil,
  tap,
  throwError,
} from 'rxjs';
import { EditComponent } from '../../shared-components/edit/edit.component';
import { SafeUrlPipe } from '../../pipes/safe-url.pipe';
import { HttpClientModule } from '@angular/common/http';
import { SearchComponent } from '../../shared-components/search/search.component';
import { TableComponent } from '../../shared-components/table/table.component';

@Component({
  selector: 'status-content',
  standalone: true,
  providers: [StatusService],
  imports: [SafeUrlPipe, TableComponent, HttpClientModule, SearchComponent],
  templateUrl: './status-content.component.html',
  styleUrl: './status-content.component.scss',
})
export class StatusContentComponent {
  statuses!: IStatus[];
  destroySubject = new Subject<void>();
  tableData!: ITableData[];
  statusById!: IStatus;
  constructor(
    private dialog: MatDialog,
    private statusService: StatusService
  ) {}
  ngOnInit() {
    this.getSpecialties();
  }

  ngOnDestroy() {
    this.destroySubject.next();
    this.destroySubject.complete();
  }

  getSpecialties() {
    this.statusService
      .getStatuses()
      .pipe(takeUntil(this.destroySubject))
      .subscribe((statuses) => {
        this.statuses = statuses;
        this.tableData = this.mapToTableData(statuses);
      });
  }

  getSpecialtyById(SpecialtiId: number) {
    this.statusService
      .getStatusById(SpecialtiId)
      .pipe(takeUntil(this.destroySubject))
      .subscribe((status) => {
        this.statusById = status;
      });
  }

  onEdit(id: number) {
    this.statusService
      .getStatusById(id)
      .pipe(
        switchMap((status) => {
          const fields = [
            {
              field: 'title',
              fieldName: 'Имя',
              type: 'string',
              value: status.name,
            },
          ];
          const buttons = [
            {
              field: 'save-button',
              type: 'submit',
              value: 'Сохранить',
            },
            {
              field: 'cancel-button',
              fieldName: 'Cancel',
              type: 'button',
              value: 'Отмена',
              click: (): void => dialogRef.close(),
            },
          ];
          const dialogRef: MatDialogRef<EditComponent, IStatus> =
            this.dialog.open(EditComponent, {
              data: {
                fields: fields,
                buttons: buttons,
              },
            });

          return dialogRef.afterClosed();
        }),
        takeUntil(this.destroySubject),
        catchError((error) => {
          console.error('Не удалось обновить', error);
          this.openModal(error.error.error);
          return throwError(error);
        })
      )
      .subscribe((updateStatus) => {
        if (updateStatus) {
          this.getSpecialties();
          this.saveSpecialties(updateStatus, id);
          this.getSpecialties();
        }
      });
  }

  saveSpecialties(updateStatus: IStatus, id: number) {
    this.statusService
      .updateStatusById(id, updateStatus)
      .pipe(
        switchMap(() => {
          return this.openModal('Данные статуса успешно обновлены');
        }),
        catchError((error) => {
          return this.openModal(error.error.error);
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

  mapToTableData(data: IStatus[]): ITableData[] {
    return data.map(({ id, name, ...rest }) => ({
      id,
      Название: name,
      ...rest,
    }));
  }

  createStatus() {
    const dialogRef: MatDialogRef<EditComponent, IStatus> = this.dialog.open(
      EditComponent,
      {
        data: {
          fields: [
            {
              field: 'title',
              fieldName: 'Название',
              type: 'string',
              value: 'Тест1',
            },
          ],
          buttons: [
            {
              field: 'save-button',
              type: 'submit',
              value: 'Создать',
            },
            {
              field: 'cancel-button',
              fieldName: 'Cancel',
              type: 'button',
              value: 'Отмена',
              click: (): void => dialogRef.close(),
            },
          ],
        },
      }
    );
    return dialogRef
      .afterClosed()
      .pipe(
        switchMap((newSpecialty) => {
          if (newSpecialty) {
            return this.statusService.createStatus(newSpecialty).pipe(
              tap(() => {
                this.getSpecialties();
              }),
              takeUntil(this.destroySubject)
            );
          } else {
            return of(null);
          }
        }),
        catchError((error) => {
          console.error('Ошибка при создании статуса:', error);
          this.openModal(error.error.error);
          return of(null);
        })
      )
      .subscribe();
  }

  onDelete(id: number) {
    const fields = [
      {
        field: 'name',
        type: 'info',
        value: 'Вы точно хотите удалить этот статус?',
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
    const dialogRef: MatDialogRef<EditComponent, IStatus> = this.dialog.open(
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
            return this.statusService.deleteStatusById(id).pipe(
              catchError((error) => {
                console.log(error.error);
                return this.openModal(error.error.error);
              })
            );
          } else {
            return of(null);
          }
        }),
        takeUntil(this.destroySubject)
      )
      .subscribe(() => {
        this.getSpecialties();
      });
  }
}
