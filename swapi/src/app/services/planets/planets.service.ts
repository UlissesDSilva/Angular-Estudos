import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from '../baseService';

@Injectable({
  providedIn: 'root'
})
export class PlanetsService extends BaseService {

  constructor(http: HttpClient) {
    super(http);
  }

  getPlanets<T>(page: number = 1): Observable<T> {
    return this.get<T>(`planets/?page=${page}`);
  }

  getPlanetByName<T>(name: string = ''): Observable<T> {
    return this.get<T>(`planets/?search=${name}`)
  }
}
