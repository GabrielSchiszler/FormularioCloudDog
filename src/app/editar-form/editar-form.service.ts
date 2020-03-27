import { Injectable } from '@angular/core'
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Produto } from '../editar-form/editar-form';
import { CadastroFormComponent } from '../cadastro-form/cadastro-form.component';
import { Cadastro } from '../cadastro-form/cadastro-form';


@Injectable({
  providedIn: 'root'
})
export class editarFormService {
  constructor(private _httpClient: HttpClient) { }
  private API: string = "http://localhost:3000/produto";
  private APII: string = "http://localhost:3000/cadastro";
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }


  listarProdutos(): Observable<Produto[]> {
    return this._httpClient.get<Produto[]>(this.API);
  }
  // atualiza um produto
  updateProdutos(produto: Produto): Observable<Produto> {
    return this._httpClient.put<Produto>(this.API + '/' + produto.id, JSON.stringify(produto), this.httpOptions)
  }
  listarCategoria ():Observable<Cadastro[]>{
    return this._httpClient.get<Cadastro[]>(this.APII);
  }
  // Manipulação de erros
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage = `Código do erro: ${error.status}, ` + `mensagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  };
}