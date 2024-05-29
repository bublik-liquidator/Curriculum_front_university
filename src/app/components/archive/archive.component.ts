import { Component, OnDestroy, OnInit } from '@angular/core';
import { ICurriculum } from '../../models/curriculum';
import { ISpecialty } from '../../models/specialty';
import { Subject, catchError, map, of, takeUntil } from 'rxjs';
import { ITableData } from '../../models/table';
import { IStatus } from '../../models/status';
import { IUser } from '../../models/user';
import { IEducation } from '../../models/educationForm';
import { CurriculumArchiveService } from '../../services/curriculumArchive.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ISearchCurriculumsResponse } from '../../models/searchCurriculumsResponse';
import { EducationService } from '../../services/education.service';
import { LoginService } from '../../services/login.service';
import { SpecialtyService } from '../../services/specialty.service';
import { StatusService } from '../../services/status.service';
import { UserService } from '../../services/user.service';
import { EditComponent } from '../../shared-components/edit/edit.component';
import { HttpClientModule } from '@angular/common/http';
import { SafeUrlPipe } from '../../pipes/safe-url.pipe';
import { SearchComponent } from '../../shared-components/search/search.component';
import { TableComponent } from '../../shared-components/table/table.component';

@Component({
  selector: 'archive',
  standalone: true,
  providers: [
    CurriculumArchiveService,
    SpecialtyService,
    StatusService,
    UserService,
    EducationService,
    LoginService,
  ],
  imports: [SafeUrlPipe, TableComponent, HttpClientModule, SearchComponent],
  templateUrl: './archive.component.html',
  styleUrl: './archive.component.scss',
})
export class ArchiveComponent implements OnInit, OnDestroy {
  archiveCurriculums!: ICurriculum[];
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
    private curriculumArchiveService: CurriculumArchiveService,
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
    this.curriculumArchiveService
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
          this.archiveCurriculums = response.curriculums;
          this.totalCount = response.total;
          this.tableData = this.mapToTableData(response.curriculums);
        }
      });
  }

  getCurriculums(pageIndex: number, limit: number) {
    this.curriculumArchiveService
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
          this.archiveCurriculums = response.curriculums;
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
    this.curriculumArchiveService.saveCurriculumAsWordToClient(id);
  }

  onEdit(id: number) {}

  onDelete(id: number) {}
}
