import { HttpClient } from '@angular/common/http';

export abstract class BaseService {

  private readonly urlBase = "https://swapi.dev/api"

  protected constructor(private http: HttpClient) {
    this.http = http
  }

  get<T>(url: string) {
    return this.http.get<T>(`${this.urlBase}/${url}`)
  }
}
