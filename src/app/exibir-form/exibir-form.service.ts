import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Produto } from './exibir-form';
import { Observable } from 'rxjs';
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
  }

  // Obtem um produto pelo id
  getProdutosID(id: number): Observable<Produto> {
    return this.httpClient.get<Produto>(this.url + '/' + id)
  }

  // salva um produto
  saveProdutos(produto: Produto): Observable<Produto> {
    return this.httpClient.post<Produto>(this.url, JSON.stringify(produto), this.httpOptions)
  }

  // deleta um produto
  deleteProdutos(produto: Produto) {
    return this.httpClient.delete<Produto>(this.url + '/' + produto.id, this.httpOptions)
  }

    private readonly API = `${environment.API}produto`
}