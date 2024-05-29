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
export class CurriculumArchiveService {
  constructor(private http: HttpClient) {}

  getExpiringCurriculums(
    page: number = 1,
    limit: number = 10
  ): Observable<ICurriculumResponse> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('limit', limit.toString());
    return this.http.get<ICurriculumResponse>(
      `${environment.serverUrl}/archive/get-expiring-curriculums`,
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
      `${environment.serverUrl}/archive/get-curriculum/${id}`
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
    const url = `${environment.serverUrl}/archive/get-curriculums`;

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
      `${environment.serverUrl}/archive/search-curriculums`,
      body
    );
  }
}
