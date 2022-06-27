import { Injectable } from '@angular/core';

@Injectable()
export class CursosService {

  constructor() { }

  getCursos() {
    return ['Angular', 'React', 'Vue', 'Java', 'C#']
  }
}
