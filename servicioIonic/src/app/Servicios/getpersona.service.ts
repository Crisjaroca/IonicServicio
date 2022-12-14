import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetpersonaService {

  constructor(public _http: HttpClient) { 

  }

  getpersona<T> (url : string){
    url = 'http://localhost:3001/api/v1/getPersonas'
    return this._http.get<T[]>(url);
  }
}
