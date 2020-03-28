import { Injectable } from '@angular/core'
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Produtos } from '../editar-form/editar-form';
import { CadastroFormComponent } from '../cadastro-form/cadastro-form.component';
import { Categorias } from '../editar-form/editar-form';


@Injectable({
  providedIn: 'root'
})
export class editarFormService {
  constructor(private _httpClient: HttpClient) { }
  private API: string = "http://localhost:3000/produtos";
  private APII: string = "http://localhost:3000/categorias";
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }


  listarProdutos(): Observable<Produtos[]> {
    return this._httpClient.get<Produtos[]>(this.API);
  }
  // atualiza um produto
  updateProdutos(produto: Produtos): Observable<Produtos> {
    return this._httpClient.put<Produtos>(this.API + '/' + produto.id, JSON.stringify(produto), this.httpOptions)
  }
  listarCategoria ():Observable<Categorias[]>{
    return this._httpClient.get<Categorias[]>(this.APII);
  }
}