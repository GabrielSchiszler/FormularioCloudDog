import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Produtos } from '../editar-form/editar-form';
import { Categorias } from '../editar-form/editar-form';
import { catchError, tap } from 'rxjs/operators';


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
  listarCategoria ():Observable<Categorias[]>{
    return this._httpClient.get<Categorias[]>(this.APII);
  }
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);

      return of(result as T);
    };   
  }
  updateProduto(id, produto): Observable<any> {
    const url = `${this.API}/${id}`;
    return this._httpClient.put(url, produto, this.httpOptions).pipe(
      tap(_ => console.log(`atualizado o produco com id=${id}`)),
      catchError(this.handleError<any>('updateProduto'))
    );
  }
  getProdutos (): Observable<Produtos[]> {
    return this._httpClient.get<Produtos[]>(this.API)
      .pipe(
        tap(produtos => console.log('leu os produtos')),
        catchError(this.handleError('getProdutos', []))
      );
  }

  getProduto(id: number): Observable<Produtos> {
    const url = `${this.API}/${id}`;
    return this._httpClient.get<Produtos>(url).pipe(
      tap(_ => console.log(`leu o produto id=${id}`)),
      catchError(this.handleError<Produtos>(`getProduto id=${id}`))
    );
  }
}