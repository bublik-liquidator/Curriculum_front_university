import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { EducationService } from '../../services/education.service';
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
import { IEducation } from '../../models/educationForm';
import { ITableData } from '../../models/table';
import { TableComponent } from '../../shared-components/table/table.component';
import { SearchComponent } from '../../shared-components/search/search.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'education-content',
  standalone: true,
  providers: [EducationService],
  imports: [TableComponent, HttpClientModule, SearchComponent],
  templateUrl: './education-content.component.html',
  styleUrl: './education-content.component.scss',
})
export class EducationContentComponent {
  educations!: IEducation[];
  destroySubject = new Subject<void>();
  tableData!: ITableData[];
  educationById!: IEducation;
  constructor(
    private dialog: MatDialog,
    private educationService: EducationService
  ) {}
  ngOnInit() {
    this.getEducations();
  }

  ngOnDestroy() {
    this.destroySubject.next();
    this.destroySubject.complete();
  }

  getEducations() {
    this.educationService
      .getEducations()
      .pipe(takeUntil(this.destroySubject))
      .subscribe((educations) => {
        this.educations = educations;
        this.tableData = this.mapToTableData(educations);
      });
  }

  getEducationById(EducationId: number) {
    this.educationService
      .getEducationById(EducationId)
      .pipe(takeUntil(this.destroySubject))
      .subscribe((status) => {
        this.educationById = status;
      });
  }

  onEdit(id: number) {
    this.educationService
      .getEducationById(id)
      .pipe(
        switchMap((education) => {
          const fields = [
            {
              field: 'title',
              fieldName: 'Имя',
              type: 'string',
              value: education.name,
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
          const dialogRef: MatDialogRef<EditComponent, IEducation> =
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
      .subscribe((updateEducation) => {
        if (updateEducation) {
          this.getEducations();
          this.saveEducations(updateEducation, id);
          this.getEducations();
        }
      });
  }

  saveEducations(updateEducation: IEducation, id: number) {
    this.educationService
      .updateEducationById(id, updateEducation)
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

  mapToTableData(data: IEducation[]): ITableData[] {
    return data.map(({ id, name, ...rest }) => ({
      id,
      Название: name,
      ...rest,
    }));
  }

  createEducation() {
    const dialogRef: MatDialogRef<EditComponent, IEducation> = this.dialog.open(
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
        switchMap((newEducation) => {
          if (newEducation) {
            return this.educationService.createEducation(newEducation).pipe(
              tap(() => {
                this.getEducations();
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
        value: 'Вы точно хотите удалить этоу форму обучения?',
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
    const dialogRef: MatDialogRef<EditComponent, IEducation> = this.dialog.open(
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
            return this.educationService.deleteEducationById(id).pipe(
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
        this.getEducations();
      });
  }
}
