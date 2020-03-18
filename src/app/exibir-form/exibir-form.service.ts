import { Injectable } from '@angular/core'
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Produto } from './exibir-form';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class exibirFormService{
    url = 'http://localhost:3000/produto'; // api rest fake
    constructor(private httpClient: HttpClient) {}

  // Headers
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  // Obtem todos os produtos
  getProdutos(): Observable<Produto[]> {
    return this.httpClient.get<Produto[]>(this.url)
      .pipe(
        retry(2),
        catchError(this.handleError))
  }

  // Obtem um produto pelo id
  getProdutosID(id: number): Observable<Produto> {
    return this.httpClient.get<Produto>(this.url + '/' + id)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  // salva um produto
  saveProdutos(produto: Produto): Observable<Produto> {
    return this.httpClient.post<Produto>(this.url, JSON.stringify(produto), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  // atualiza um produto
  updateProdutos(produto: Produto): Observable<Produto> {
    return this.httpClient.put<Produto>(this.url + '/' + produto.id, JSON.stringify(produto), this.httpOptions)
      .pipe(
        catchError(this.handleError)
      )
  }

  // deleta um produto
  deleteProdutos(produto: Produto) {
    return this.httpClient.delete<Produto>(this.url + '/' + produto.id, this.httpOptions)
      .pipe(
        catchError(this.handleError)
      )
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

    private readonly API = `${environment.API}produto`
}