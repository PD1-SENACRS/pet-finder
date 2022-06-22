import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Caso } from './Caso';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

const casosUrl = 'https://pd1-api2.herokuapp.com/api/casos/'

@Injectable({
  providedIn: 'root'
})

export class ListarCasoService {
  constructor(private http: HttpClient) { }

  GetCasos(): Observable<Caso[]> {
    return this.http.get<Caso[]>(casosUrl);
  }

  Insert(caso: Caso): Observable<Caso>{
    return this.http.post<Caso>(casosUrl,caso,httpOptions);
  }

  SearchById(id: string): Observable<Caso> {
    const uri = `${casosUrl}/${id}`;
    return this.http.get<Caso>(uri);
  }

  Update(id: string, caso: Caso): Observable<Caso> {
    const uri = `${casosUrl}/${id}`;
    return this.http.put<Caso>(uri, caso, httpOptions);
  }

  Delete(id: string) {
    const uri = `${casosUrl}/${id}`;
    return this.http.delete(uri);
  }
}