import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import {
  Subject,
  takeUntil,
  switchMap,
  map,
  of,
  catchError,
  tap,
  throwError,
} from 'rxjs';
import { ISpecialty } from '../../models/specialty';
import { ITableData } from '../../models/table';
import { SpecialtyService } from '../../services/specialty.service';
import { EditComponent } from '../../shared-components/edit/edit.component';
import { SafeUrlPipe } from '../../pipes/safe-url.pipe';
import { HttpClientModule } from '@angular/common/http';
import { SearchComponent } from '../../shared-components/search/search.component';
import { TableComponent } from '../../shared-components/table/table.component';

@Component({
  selector: 'specialty-content',
  standalone: true,
  providers: [SpecialtyService],
  imports: [SafeUrlPipe, TableComponent, HttpClientModule, SearchComponent],
  templateUrl: './specialty-content.component.html',
  styleUrl: './specialty-content.component.scss',
})
export class SpecialtyContentComponent implements OnInit, OnDestroy {
  specialties!: ISpecialty[];
  destroySubject = new Subject<void>();
  tableData!: ITableData[];
  specialtiesById!: ISpecialty;
  constructor(
    private dialog: MatDialog,
    private specialtyService: SpecialtyService
  ) {}
  ngOnInit() {
    this.getSpecialties();
  }

  ngOnDestroy() {
    this.destroySubject.next();
    this.destroySubject.complete();
  }

  getSpecialties() {
    this.specialtyService
      .getSpecialties()
      .pipe(takeUntil(this.destroySubject))
      .subscribe((specialties) => {
        this.specialties = specialties;
        this.tableData = this.mapToTableData(specialties);
      });
  }

  getSpecialtyById(SpecialtiId: number) {
    this.specialtyService
      .getSpecialyById(SpecialtiId)
      .pipe(takeUntil(this.destroySubject))
      .subscribe((specialties) => {
        this.specialtiesById = specialties;
      });
  }

  onEdit(id: number) {
    this.specialtyService
      .getSpecialyById(id)
      .pipe(
        switchMap((specialty) => {
          const fields = [
            {
              field: 'title',
              fieldName: 'Имя',
              type: 'string',
              value: specialty.name,
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
          const dialogRef: MatDialogRef<EditComponent, ISpecialty> =
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
          this.openModal(error.error);
          console.error('Не удалось обновить', error);
          return throwError(error);
        })
      )
      .subscribe((updateSpecialty) => {
        if (updateSpecialty) {
          this.getSpecialties();
          this.saveSpecialties(updateSpecialty, id);
          this.getSpecialties();
        }
      });
  }

  saveSpecialties(updateSpecialty: ISpecialty, id: number) {
    this.specialtyService
      .updateSpecialtyById(id, updateSpecialty)
      .pipe(
        switchMap(() => {
          return this.openModal('Данные учебной программы успешно обновлены');
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

  mapToTableData(data: ISpecialty[]): ITableData[] {
    return data.map(({ id, name, ...rest }) => ({
      id,
      Название: name,
      ...rest,
    }));
  }

  createSpeciality() {
    const dialogRef: MatDialogRef<EditComponent, ISpecialty> = this.dialog.open(
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
            return this.specialtyService.createSpecialties(newSpecialty).pipe(
              tap(() => {
                this.getSpecialties();
              }),
              catchError((error) => {
                this.openModal(error.error);
                console.error('Не удалось создать специальность', error);
                return throwError(error);
              }),
              takeUntil(this.destroySubject)
            );
          } else {
            return of(null);
          }
        })
      )
      .subscribe();
  }

  onDelete(id: number) {
    const fields = [
      {
        field: 'name',
        type: 'info',
        value: 'Вы точно хотите удалить эту специальность?',
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
    const dialogRef: MatDialogRef<EditComponent, ISpecialty> = this.dialog.open(
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
            return this.specialtyService.deleteSpecialtiesById(id).pipe(
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
        this.getSpecialties();
      });
  }
}
