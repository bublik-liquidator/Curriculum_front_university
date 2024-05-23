import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IStatus } from '../models/status';
import { environment } from '../environment';

@Injectable({
  providedIn: 'root',
})
export class StatusService {
  constructor(private http: HttpClient) {}

  getStatuses(): Observable<IStatus[]> {
    return this.http.get<IStatus[]>(
      `${environment.serverUrl}/status/get-statuses`
    );
  }

  getStatusesByIdCurriculum(CurriculumId: number): Observable<IStatus> {
    return this.http.get<IStatus>(
      `${environment.serverUrl}/status/get-curriculums-status/${CurriculumId}`
    );
  }
  getStatusById(StatusId: number): Observable<IStatus> {
    return this.http.get<IStatus>(
      `${environment.serverUrl}/status/get-status/${StatusId}`
    );
  }

  updateStatusById(
    StatusId: number,
    updateStatus: IStatus
  ): Observable<IStatus[]> {
    return this.http.put<IStatus[]>(
      `${environment.serverUrl}/status/update-statuses/${StatusId}`,
      updateStatus
    );
  }

  deleteStatusById(StatusId: number): Observable<IStatus[]> {
    return this.http.delete<IStatus[]>(
      `${environment.serverUrl}/status/delete-statuses/${StatusId}`
    );
  }

  createStatus(Status: IStatus): Observable<IStatus[]> {
    return this.http.post<IStatus[]>(
      `${environment.serverUrl}/status/create-statuses`,
      Status
    );
  }
}
