import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from '../baseService';

@Injectable({
  providedIn: 'root'
})
export class CharactersService extends BaseService {

  constructor(http: HttpClient) {
    super(http);
  }

  getCharacters<T>(page: number = 1): Observable<T> {
    return this.get<T>(`people/?page=${page}`);
  }

  getCharacterByName<T>(name: string): Observable<T> {
    return this.get<T>(`people/?search=${name}`);
  }
}
