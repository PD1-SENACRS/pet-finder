import { ICaso } from './../registros-casos/models/ICaso';
import { Caso } from './../registros-casos/models/Caso';
import { Observable, take, tap } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { RetCasos } from '../registros-casos/models/RetCaso';

@Injectable( {
  providedIn: 'root'
} )
export class HomeService
{
  //todo 
  private readonly baseURL: string = "https://pd1-api2.herokuapp.com/api/casos";
  private readonly ApiGatos: string = "https://api.thecatapi.com/v1/images/search"


  constructor ( public httpClient: HttpClient ) { }

  getListaMarcadores (): Observable<ICaso[]>
  {
    const headers = new HttpHeaders()
      .set( 'Content-Type', 'application/json' )
      .set( 'Access-Control-Allow-Origin', '*' )
    const url = this.baseURL
    return this.httpClient.get<ICaso[]>(
      url,
      { 'headers': headers } )
      .pipe(
        take( 1 ),
        tap( response =>
        {



        } )
      );
  }
    getFotoDeGato (): Observable<string>
    {
      const headers = new HttpHeaders()
      .set( 'Content-Type', 'application/json' )
      .set( 'Access-Control-Allow-Origin', '*' )
      const url = this.ApiGatos
      return this.httpClient.get<string>(
        url,
        { 'headers': headers } )
        .pipe(
          take( 1 ),
          tap( response =>
          {

  
          } )
        );
    }
}


/* 

getSimulacoes (): Observable<RetSimulaLicenca> {
  const authorization = 'Basic ' + btoa( environment.SpRhFun3WebService_user + ':' + environment.SpRhFun3WebService_psw );
// linhas para testar os endpoints que ainda não estão publicados
// const authorizationTest = 'Basic ' + btoa( "m" + ':' + "m" );
// const url = `http://localhost:44384/api/simulacao/GetSimularLicencaPreparation?dominio=${ this.authService.dominio }&infraUsuarioId=${ this.authService.infraUsuarioId }`;

const headers = new HttpHeaders()
  .set( 'Content-Type', 'application/json' )
  .set( 'Authorization', authorization );

const url = `${ this.baseWorkFlow }/GetSimularLicencaPreparation?dominio=${ this.authService.dominio }&infraUsuarioId=${ this.authService.infraUsuarioId }`;

return this.httpClient.get<RetSimulaLicenca>(
  url,
  { 'headers': headers } )
  .pipe(
          take( 1 ),
          tap( response => {

                  if ( response.Error )
                  {
                          throw Error( response.ErrorMessage );
                  }

          } )
  );

} */


