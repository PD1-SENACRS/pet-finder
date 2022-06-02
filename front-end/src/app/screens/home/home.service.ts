import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
//todo 
  private readonly baseURL: string = "URL DE REQUISIÇÃO";

  constructor() { }
}




// import { environment } from '../../../environments/environment';
// import { Observable } from 'rxjs';
// import { Injectable } from '@angular/core';
// import { HttpClient, HttpParams } from '@angular/common/http';
// import { RetCrpPessoa } from 'src/app/project/services/crp-pessoa/models/ret-crp-pessoa';
// import { Filtro } from './models/Filtro/filtro-avançado';
// import { PessoasScreen } from './models/pessoas-screen';
// import { RetPessoas } from './models/ret-pessoas';
// import { RetDadosBasicosTab } from './models/ret-dados-basicos-tab';

// @Injectable({
// 	providedIn: 'root',
// })
// @Injectable()
// export class PessoaScreenService {
// 	private readonly baseURL: string = `${environment.SpInfraCtr3CtrWebService}/pessoas-screen`;
// 	private readonly apiPostPessoaScreen: string = 'dados-basicos';
// 	private apiGetCrpPessoa: string = 'crp-pessoas'
	
// 	constructor(public httpClient: HttpClient) {
// 	}

	
// 	criarPessoa(data: PessoasScreen): Observable<RetCrpPessoa> {
// 		const url = `${ this.baseURL }/${ this.apiPostPessoaScreen }`;

// 		return this.httpClient
// 			.post<RetCrpPessoa>(url, data);
// 	}


// 	getListaPessoas(filtro: Filtro): Observable<RetPessoas> {
// 		let params = new HttpParams();
// 		if (filtro.filtroCidade !== 0) {
// 			params = params.set('cidade', filtro.filtroCidade.toString())
// 		}
// 		if (filtro.pesquisaTexto.trim() !== '') {
// 			params = params.set('pesquisa', filtro.pesquisaTexto.toString())
// 		}
// 		if (filtro.filtroEstado !== 0) {
// 			params = params.set('estado', filtro.filtroEstado.toString())
// 		}
// 		if (filtro.filtroPapeis.length !== 0) {
// 			params = params.set('papeis', filtro.filtroPapeis.join(","))
// 		}

// 		params = params.set('is_active', filtro.filtroIsActive)

// 		const url = `${this.baseURL}`;

// 		return this.httpClient
// 			.get<RetPessoas>(url, {
// 				params
// 			});
// 	}

// 	/**
// 	 * Pega os dados básicos da tab de dados básicos.
// 	 * 
// 	 * @param id Id da pessoa onde os dados básicos serão pegos.
// 	 * @returns Chamada que deve retornar os dados básicos.
// 	 */
// 	getDadosBasicosTab(id: string): Observable<RetDadosBasicosTab> {
// 		const url = `${this.baseURL}/basic-data-tab/${id}`;

// 		return this.httpClient.get<RetDadosBasicosTab>(url);
// 	}
// }
