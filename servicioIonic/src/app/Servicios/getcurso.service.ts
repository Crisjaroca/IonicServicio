import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class GetcursoService {
  
  constructor(public _http: HttpClient) { 

  }

  getcurso<T> (url : string){
    url = 'http://localhost:3001/api/v1/getCursos'
    return this._http.get<T[]>(url);
  }
}
