import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from '../environment';
import { ISpecialty } from '../models/specialty';

@Injectable({
  providedIn: 'root',
})
export class SpecialtyService {
  constructor(private http: HttpClient) {}

  getSpecialties(): Observable<ISpecialty[]> {
    return this.http.get<ISpecialty[]>(
      `${environment.serverUrl}/specialty/get-specialties`
    );
  }

  getSpecialtiesById(SpecialtiId: number): Observable<ISpecialty[]> {
    return this.http.get<ISpecialty[]>(
      `${environment.serverUrl}/specialty/get-specialties/${SpecialtiId}`
    );
  }
  getSpecialyById(SpecialtiId: number): Observable<ISpecialty> {
    return this.http.get<ISpecialty>(
      `${environment.serverUrl}/specialty/get-specialty/${SpecialtiId}`
    );
  }

  updateSpecialtyById(
    SpecialtiId: number,
    updateSpecialty: ISpecialty
  ): Observable<ISpecialty[]> {
    return this.http.put<ISpecialty[]>(
      `${environment.serverUrl}/specialty/update-specialties/${SpecialtiId}`,
      updateSpecialty
    );
  }

  deleteSpecialtiesById(SpecialtiId: number): Observable<ISpecialty[]> {
    return this.http.delete<ISpecialty[]>(
      `${environment.serverUrl}/specialty/delete-specialties/${SpecialtiId}`
    );
  }

  createSpecialties(Specialty: ISpecialty): Observable<ISpecialty[]> {
    return this.http.post<ISpecialty[]>(
      `${environment.serverUrl}/specialty/create-specialties`,
      Specialty
    );
  }
}
