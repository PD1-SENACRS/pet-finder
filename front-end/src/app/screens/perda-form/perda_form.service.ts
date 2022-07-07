import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable, throwError, take, tap } from 'rxjs';
import { Caso } from './Caso';

const httpOptions = {
  headers: new HttpHeaders( {
    'Content-Type': 'application/json'
  } )
}

const casoUrl = 'https://pd1-api2.herokuapp.com/api/casos';
const ApiGatos: string = "https://softl.ink/cat"

@Injectable( {
  providedIn: 'root'
} )

export class CasoService
{
  constructor ( private http: HttpClient ) { }

  Insert ( caso: Caso ): Observable<Caso>
  {
    return this.http.post<Caso>( casoUrl, caso, httpOptions );
  }

  getFotoDeGato (): Observable<string>
  {
    const url = ApiGatos
    const headers = new HttpHeaders()
      .set( 'Content-Type', 'text/html; charset=utf-8' )
      .set( 'Access-Control-Allow-Origin', '*' )

    return this.http.get<string>(
      url,
      { 'headers': headers } )
      .pipe(
        tap( response =>
          {
          console.log(response)
  
  
          } )

      );
  }


}