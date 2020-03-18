import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produto } from '../cadastro-form/cadastro-form';


@Injectable({
    providedIn: 'root'
})
export class editarFormService{
    constructor(private _httpClient: HttpClient) {}
    private API : string = "http://localhost:3000/produto"; 
    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
      }
    

    getProdutos(): Observable<Produto[]> {
        return this._httpClient.get<Produto[]>(this.API)
      }
    
      // Obtem um produto pelo id
      getProdutosID(id: string): Observable<Produto> {
        return this._httpClient.get<Produto>(this.API + '/' + id)
          
      }
      saveProdutos(produto: Produto): Observable<Produto> {
        return this._httpClient.post<Produto>(this.API, JSON.stringify(produto), this.httpOptions)

      }
    
      // atualiza um produto
      updateProdutos(produto: Produto): Observable<Produto> {
        return this._httpClient.put<Produto>(this.API + '/' + produto.id, JSON.stringify(produto), this.httpOptions)

      }
    
      // deleta um produto
      deleteProdutos(produto: Produto) {
        return this._httpClient.delete<Produto>(this.API + '/' + produto.id, this.httpOptions)

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
      };
    
        
    }


