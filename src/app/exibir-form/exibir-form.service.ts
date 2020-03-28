import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Produtos } from './exibir-form';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class exibirFormService{
    url = 'http://localhost:3000/produtos'; // api rest fake
    constructor(private httpClient: HttpClient) {}

  // Headers
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  // Obtem todos os produtos
  getProdutos(): Observable<Produtos[]> {
    return this.httpClient.get<Produtos[]>(this.url)
  }

  // Obtem um produto pelo id
  getProdutosID(id: number): Observable<Produtos> {
    return this.httpClient.get<Produtos>(this.url + '/' + id)
  }

  // salva um produto
  saveProdutos(produto: Produtos): Observable<Produtos> {
    return this.httpClient.post<Produtos>(this.url, JSON.stringify(produto), this.httpOptions)
  }

  // deleta um produto
  deleteProdutos(produto: Produtos) {
    return this.httpClient.delete<Produtos>(this.url + '/' + produto.id, this.httpOptions)
  }
}