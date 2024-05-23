import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IEducation } from '../models/educationForm';
import { environment } from '../environment';

@Injectable({
  providedIn: 'root',
})
export class EducationService {
  constructor(private http: HttpClient) {}

  getEducations(): Observable<IEducation[]> {
    return this.http.get<IEducation[]>(
      `${environment.serverUrl}/education-form/get-education-forms`
    );
  }

  getEducationById(educationFormId: number): Observable<IEducation> {
    return this.http.get<IEducation>(
      `${environment.serverUrl}/education-form/get-education-form/${educationFormId}`
    );
  }

  updateEducationById(
    educationId: number,
    updateEducation: IEducation
  ): Observable<IEducation[]> {
    return this.http.put<IEducation[]>(
      `${environment.serverUrl}/education-form/update-education-forms/${educationId}`,
      updateEducation
    );
  }

  deleteEducationById(educationFormId: number): Observable<IEducation[]> {
    return this.http.delete<IEducation[]>(
      `${environment.serverUrl}/education-form/delete-education-forms/${educationFormId}`
    );
  }

  createEducation(education: IEducation): Observable<IEducation[]> {
    return this.http.post<IEducation[]>(
      `${environment.serverUrl}/education-form/create-education-forms`,
      education
    );
  }
}
