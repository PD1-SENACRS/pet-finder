import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Caso } from './Caso';

const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  
  const casoUrl = 'https://pd1-api2.herokuapp.com/api/casos';
  
  @Injectable({
    providedIn: 'root'
  })
  
  export class CasoService {
    constructor(private http: HttpClient) { }
  
    Insert(caso: Caso): Observable<Caso>{
      return this.http.post<Caso>(casoUrl,caso,httpOptions);
    }
  
    
  }