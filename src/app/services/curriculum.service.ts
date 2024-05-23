import { ICurriculum } from '../models/curriculum';
import { Observable, tap } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { environment } from '../environment';
import saveAs from 'file-saver';
import { ISearchCurriculumsResponse } from '../models/searchCurriculumsResponse';

interface ICurriculumResponse {
  curriculums: ICurriculum[];
  total: number;
}

@Injectable({
  providedIn: 'root',
})
export class CurriculumService {
  constructor(private http: HttpClient) {}

  //метод ниже не юзать оно фигня
  getExpiringCurriculums(
    page: number = 1,
    limit: number = 10
  ): Observable<ICurriculumResponse> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('limit', limit.toString());
    return this.http.get<ICurriculumResponse>(
      `${environment.serverUrl}/curriculum/get-expiring-curriculums`,
      { params }
    );
  }

  saveCurriculumAsWordToClient(id: number) {
    this.http
      .post(
        `${environment.serverUrl}/curriculum/save-curriculum-asWord-to-client/${id}`,
        { id },
        { responseType: 'blob', observe: 'response' }
      )
      .subscribe((response: HttpResponse<Blob>) => {
        const contentDisposition =
          response.headers.get('content-disposition') || '';
        const filename =
          contentDisposition.split(';')[1]?.split('=')[1] || `file${id}.docx`;
        if (response.body) {
          saveAs(response.body, filename);
        }
      });
  }

  getCurriculumById(id: number): Observable<ICurriculum> {
    return this.http.get<ICurriculum>(
      `${environment.serverUrl}/curriculum/get-curriculum/${id}`
    );
  }

  updateCurriculumById(
    id: number,
    curriculumData: ICurriculum
  ): Observable<ICurriculum> {
    return this.http.put<ICurriculum>(
      `${environment.serverUrl}/curriculum/update-curriculum-info/${id}`,
      curriculumData
    );
  }

  updateFileById(id: number, file: File): Observable<ICurriculum> {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.put<ICurriculum>(
      `${environment.serverUrl}/curriculum/update-curriculum/${id}`,
      formData
    );
  }

  createCurriculum(
    curriculum: ICurriculum,
    file: File
  ): Observable<ICurriculum> {
    const formData: FormData = new FormData();

    formData.append('curriculum', JSON.stringify(curriculum));

    formData.append('file', file, file.name);

    return this.http.post<ICurriculum>(
      `${environment.serverUrl}/curriculum/create-curriculum`,
      formData
    );
  }

  deleteCurriculum(id: number): Observable<ICurriculum> {
    return this.http.delete<ICurriculum>(
      `${environment.serverUrl}/curriculum/delete-curriculum/${id}`
    );
  }
  getCurriculums(
    page: number = 1,
    limit: number = 10
  ): Observable<ICurriculumResponse> {
    const body = {
      page: page.toString(),
      limit: limit.toString(),
    };
    const url = `${environment.serverUrl}/curriculum/get-curriculums`;

    console.log('HTTP Request:', 'POST', url, body);

    return this.http.post<ICurriculumResponse>(url, body);
  }

  searchCurriculums(
    searchQuery: string = '',
    page: number = 1,
    limit: number = 10
  ): Observable<ISearchCurriculumsResponse> {
    const body = {
      search: searchQuery,
      limit: limit,
      page: page,
    };
    console.log(body);

    return this.http.post<ISearchCurriculumsResponse>(
      `${environment.serverUrl}/curriculum/search-curriculums`,
      body
    );
  }
}
