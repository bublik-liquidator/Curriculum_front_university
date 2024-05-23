import { Component, OnDestroy, OnInit } from '@angular/core';
import { CurriculumService } from '../../services/curriculum.service';
import { ICurriculum } from '../../models/curriculum';
import {
  EMPTY,
  Observable,
  Subject,
  catchError,
  filter,
  map,
  of,
  switchMap,
  take,
  takeUntil,
  tap,
} from 'rxjs';
import { SafeUrlPipe } from '../../pipes/safe-url.pipe';
import { TableComponent } from '../../shared-components/table/table.component';
import { HttpClientModule } from '@angular/common/http';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ITableData } from '../../models/table';
import { IUser } from '../../models/user';
import { EditComponent } from '../../shared-components/edit/edit.component';
import { SpecialtyService } from '../../services/specialty.service';
import { ISpecialty } from '../../models/specialty';
import { IStatus } from '../../models/status';
import { StatusService } from '../../services/status.service';
import { UserService } from '../../services/user.service';
import { SearchComponent } from '../../shared-components/search/search.component';
import { EducationService } from '../../services/education.service';
import { IEducation } from '../../models/educationForm';
import { ISearchCurriculumsResponse } from '../../models/searchCurriculumsResponse';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'curriculum-content',
  standalone: true,
  providers: [
    CurriculumService,
    SpecialtyService,
    StatusService,
    UserService,
    EducationService,
    LoginService,
  ],
  imports: [SafeUrlPipe, TableComponent, HttpClientModule, SearchComponent],
  templateUrl: './curriculum-content.component.html',
  styleUrl: './curriculum-content.component.scss',
})
export class CurriculumContentComponent implements OnInit, OnDestroy {
  curriculums!: ICurriculum[];
  specialties!: ISpecialty[];
  destroySubject = new Subject<void>();
  tableData!: ITableData[];
  specialtiesById!: ISpecialty[];
  statuses!: IStatus[];
  users!: IUser[];
  activeUser!: string;
  educations!: IEducation[];
  totalCount!: number;
  currentSearchQuery: string = '';
  checkToken: boolean = false;
  pageIndex: number = 1;

  constructor(
    private curriculumService: CurriculumService,
    private dialog: MatDialog,
    private specialtyService: SpecialtyService,
    private statusService: StatusService,
    private userService: UserService,
    private educationService: EducationService,
    private loginService: LoginService
  ) {}

  ngOnInit() {
    this.getCurriculums(this.pageIndex, 10);
    this.getSpecialties();
    this.getStatuses();
    this.getUsers();
    this.getEducations();
    this.checkTokenFun();
  }
  getEducations() {
    this.educationService
      .getEducations()
      .pipe(takeUntil(this.destroySubject))
      .subscribe((educations) => {
        this.educations = educations;
      });
  }
  ngOnDestroy() {
    this.destroySubject.next();
    this.destroySubject.complete();
  }

  checkTokenFun() {
    this.checkToken = this.loginService.checkToken('isAdmin') as boolean;
    this.activeUser = this.loginService.checkToken('name') as string;
  }

  onPageChange(pageIndex: number, data: string = '') {
    this.currentSearchQuery = data;
    this.pageIndex = pageIndex;
    this.curriculumService
      .searchCurriculums(data, pageIndex, 10)
      .pipe(
        takeUntil(this.destroySubject),
        catchError((error) => {
          this.openModal(error.error);
          return of(null);
        })
      )
      .subscribe((response: ISearchCurriculumsResponse | null) => {
        if (response) {
          this.curriculums = response.curriculums;
          this.totalCount = response.total;
          this.tableData = this.mapToTableData(response.curriculums);
        }
      });
  }

  getCurriculums(pageIndex: number, limit: number) {
    this.curriculumService
      .getCurriculums(pageIndex, limit)
      .pipe(
        takeUntil(this.destroySubject),
        catchError((error) => {
          this.openModal(error.error);
          return of(null);
        })
      )
      .subscribe((response) => {
        if (response) {
          this.curriculums = response.curriculums;
          this.totalCount = response.total;
          this.tableData = this.mapToTableData(response.curriculums);
        }
      });
  }

  getSpecialties() {
    this.specialtyService
      .getSpecialties()
      .pipe(takeUntil(this.destroySubject))
      .subscribe((specialties) => {
        this.specialties = specialties;
      });
  }

  getStatuses() {
    this.statusService
      .getStatuses()
      .pipe(takeUntil(this.destroySubject))
      .subscribe((statuses) => {
        this.statuses = statuses;
      });
  }

  getUsers() {
    this.userService
      .getUsersForCurriculas()
      .pipe(takeUntil(this.destroySubject))
      .subscribe((users) => {
        this.users = users.users;
      });
  }

  getSpecialtiesById(CurriculumId: number) {
    this.specialtyService
      .getSpecialtiesById(CurriculumId)
      .pipe(takeUntil(this.destroySubject))
      .subscribe((specialties) => {
        this.specialtiesById = specialties;
      });
  }

  onEdit(id: number) {
    this.curriculumService
      .getCurriculumById(id)
      .pipe(
        switchMap((curriculum) => {
          return this.getListOfSpecialtiesById(id).pipe(
            map((listOfSpecialties) => {
              return { curriculum, listOfSpecialties };
            })
          );
        }),
        switchMap(({ curriculum, listOfSpecialties }) => {
          const fields = [
            {
              field: 'title',
              fieldName: 'Название',
              type: 'string',
              value: curriculum.title,
            },
            {
              field: 'year',
              fieldName: 'Год',
              type: 'number',
              value: curriculum.year,
            },
            {
              field: 'statusName',
              fieldName: 'Статус',
              type: 'select',
              value: curriculum.statusName,
              options: this.statuses.map((status) => ({
                value: status.name,
              })),
            },
            {
              field: 'filePath',
              fieldName: 'Upload Word File',
              type: 'button',
              value: 'изменить файл',
              click: (): void => this.uploadFile(id),
            },
            {
              field: 'educationFormName',
              fieldName: 'Форма обучения',
              type: 'select',
              value: curriculum.educationFormName,
              options: this.educations.map((educationForm) => ({
                value: educationForm.name,
              })),
            },
            {
              field: 'Specialties',
              fieldName: 'Специальности',
              type: 'checkbox',
              value: listOfSpecialties,
            },

            {
              field: 'expiryDate',
              fieldName: 'Окончание',
              type: 'date',
              value: curriculum.expiryDate,
            },
          ];
          if (this.checkToken) {
            fields.push({
              field: 'developerName',
              fieldName: 'Ведущий',
              type: 'select',
              value: curriculum.developerName,
              options: this.users.map((user) => ({
                value: user.name,
              })),
            });
          } else {
            fields.push({
              field: 'developerName',
              fieldName: 'Ведущий',
              type: 'info',
              value: this.activeUser,
            });
          }
          const buttons = [
            {
              field: 'save-button ',
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
          const dialogRef: MatDialogRef<EditComponent, ICurriculum> =
            this.dialog.open(EditComponent, {
              data: {
                fields: fields,
                buttons: buttons,
              },
            });

          return dialogRef.afterClosed().pipe(
            take(1),
            filter((updatedCurriculum) => !!updatedCurriculum),
            tap((updatedCurriculum) => {
              this.saveCurriculum(updatedCurriculum!, id);
            })
          );
        }),
        catchError((error) => {
          console.error('Ошибка при получении данных:', error);
          this.openModal(error.error.error);
          return of(null);
        })
      )
      .subscribe();
  }

  createCurriculum() {
    return this.getListOfSpecialtiesById()
      .pipe(
        map((listOfSpecialties) => {
          const fields = [
            {
              field: 'title',
              fieldName: 'Название',
              type: 'string',
              value: 'Тест1',
            },
            {
              field: 'year',
              fieldName: 'Год',
              type: 'number',
              value: new Date().getFullYear(),
            },
            {
              field: 'statusName',
              fieldName: 'Статус',
              type: 'select',
              value: this.statuses[0].name,
              options: this.statuses.map((status) => ({
                value: status.name,
              })),
            },
            {
              field: 'Specialties',
              fieldName: 'Специальности',
              type: 'checkbox',
              value: listOfSpecialties,
            },
            {
              field: 'educationFormName',
              fieldName: 'Форма обучения',
              type: 'select',
              value: this.educations[0].name,
              options: this.educations.map((educationForm) => ({
                value: educationForm.name,
              })),
            },
            {
              field: 'expiryDate',
              fieldName: 'Окончание',
              type: 'date',
              value: new Date(
                new Date().setFullYear(new Date().getFullYear() + 1)
              ),
            },
          ];
          if (this.checkToken) {
            fields.push({
              field: 'developerName',
              fieldName: 'Ведущий',
              type: 'select',
              value: this.users[0].name,
              options: this.users.map((user) => ({
                value: user.name,
              })),
            });
          } else {
            fields.push({
              field: 'developerName',
              fieldName: 'Ведущий',
              type: 'info',
              value: this.loginService.checkToken('name') as string,
            });
          }
          const buttons = [
            {
              field: 'save-button ',
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
          ];
          const dialogRef: MatDialogRef<EditComponent, ICurriculum> =
            this.dialog.open(EditComponent, {
              data: {
                fields: fields,
                buttons: buttons,
              },
            });
          this.specialties;
          return dialogRef.afterClosed().pipe(
            switchMap((newCurriculum) => {
              if (newCurriculum) {
                return this.createFile(newCurriculum).pipe(
                  catchError((error) => {
                    this.openModal(error.error.error);
                    console.error('Ошибка при создании файла:', error);
                    return EMPTY;
                  }),
                  switchMap((file) => {
                    if (file) {
                      return this.curriculumService.createCurriculum(
                        newCurriculum,
                        file
                      );
                    } else {
                      return of(null);
                    }
                  }),
                  tap(() => {
                    this.getCurriculums(this.pageIndex, 10);
                  })
                );
              } else {
                return of(null);
              }
            }),
            takeUntil(this.destroySubject)
          );
        }),
        switchMap((result) => result)
      )
      .subscribe();
  }

  createFile(newCurriculum: ICurriculum): Observable<File> {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = '.doc,.docx';
    const fileName = `${newCurriculum.title}_${newCurriculum.year}_${newCurriculum.educationFormName}_${newCurriculum.developerName}`;

    return new Observable((observer) => {
      fileInput.onchange = (event) => {
        const target = event.target as HTMLInputElement;
        if (target.files && target.files.length > 0) {
          const originalFile = target.files[0];
          const file = new File([originalFile], fileName, {
            type: originalFile.type,
          });
          observer.next(file);
          observer.complete();
        }
      };
      fileInput.click();
      this.getCurriculums(this.pageIndex, 10);
    });
  }

  getListOfSpecialtiesById(id?: number) {
    if (!id) {
      return of(
        this.specialties.map((specialty) => ({
          id: specialty.id,
          name: specialty.name,
          selected: false,
        }))
      );
    }
    return this.specialtyService.getSpecialtiesById(id).pipe(
      map((specialties) => {
        this.specialtiesById = specialties;

        const listOfSpecialties = this.specialties.map((specialty) => ({
          id: specialty.id,
          name: specialty.name,
          selected:
            this.specialtiesById &&
            this.specialtiesById.find(
              (planSpec) => planSpec.id === specialty.id
            )
              ? true
              : false,
        }));

        return listOfSpecialties;
      }),
      takeUntil(this.destroySubject)
    );
  }

  uploadFile(id: number) {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = '.doc,.docx';
    fileInput.onchange = (event) => {
      const target = event.target as HTMLInputElement;
      if (target.files && target.files.length > 0) {
        const file = target.files[0];
        this.curriculumService
          .updateFileById(id, file)
          .pipe(
            switchMap(() => {
              return this.openModal('Файл успешно обновлен');
            }),
            catchError((error) => {
              return this.openModal(error.error.error);
            }),
            takeUntil(this.destroySubject)
          )
          .subscribe();
      }
    };
    fileInput.click();
  }

  saveCurriculum(updateCurriculum: ICurriculum, id: number) {
    this.curriculumService
      .updateCurriculumById(id, updateCurriculum)
      .pipe(
        tap(() => {
          this.openModal('Данные учебной программы успешно обновлены');
          this.getCurriculums(this.pageIndex, 10);
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

  mapToTableData(data: ICurriculum[]): ITableData[] {
    return data.map(
      ({
        id,
        lastModified,
        expiryDate,
        developerId,
        developerName,
        statusId,
        statusName,
        educationFormName,
        educationFormId,
        title,
        year,
        ...rest
      }) => ({
        id,
        Название: title,
        Скачать: {
          display: 'скачать',
          download: () => this.downloadFile(id),
        },
        Год: year,
        Ведущий: developerName,
        Форма: educationFormName,
        Статусы: statusName,
        ...rest,
        Изменён: new Date(lastModified).toLocaleDateString('ru-RU', {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
        }),
        'Срок действия': new Date(expiryDate).toLocaleDateString('ru-RU', {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
        }),
      })
    );
  }

  downloadFile(id: number) {
    this.curriculumService.saveCurriculumAsWordToClient(id);
  }

  onDelete(id: number) {
    const fields = [
      {
        field: 'name',
        type: 'info',
        value: 'Вы точно хотите удалить выбранную программу?',
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
        switchMap(() => {
          return this.curriculumService.deleteCurriculum(id);
        }),
        catchError((error) => {
          console.error('Ошибка при удалении программы:', error);
          this.openModal(error.error.error);
          return EMPTY;
        }),
        takeUntil(this.destroySubject)
      )
      .subscribe(() => {
        this.getCurriculums(this.pageIndex, 10);
      });
  }
}
