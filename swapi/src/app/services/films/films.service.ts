import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseService } from '../baseService';

@Injectable({
  providedIn: 'root'
})
export class FilmsService extends BaseService{

  constructor(http: HttpClient) {
    super(http)
  }

  getFilms<T>(): Observable<T> {
    return this.get<T>('films');
  }

  getFilmByName<T>(name: string): Observable<T> {
    return this.get<T>(`films/?search=${name}`);
  }
}
