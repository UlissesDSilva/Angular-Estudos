import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from '../baseService';

@Injectable({
  providedIn: 'root'
})
export class StarshipService extends BaseService {

  constructor(http: HttpClient) {
    super(http)
  }

  getStarships<T>(page: number = 1): Observable<T> {
    return this.get<T>(`starships/?page=${page}`);
  }

  getStarshipByName<T>(name: string): Observable<T> {
    return this.get<T>(`starships/?search=${name}`);
  }
}
