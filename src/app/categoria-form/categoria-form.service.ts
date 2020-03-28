import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Categorias } from './categoria-form';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class categoriaFormService {
    constructor(private _httpClient: HttpClient) { }
    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }
    private API: string = "http://localhost:3000/categorias";

    gravarcat(categoria: Categorias): Observable<Categorias> {
        return this._httpClient.post<Categorias>(this.API, categoria);
    }
    listarCategorias(): Observable<Categorias[]> {
        return this._httpClient.get<Categorias[]>(this.API);
    }
    getCategorias(): Observable<Categorias[]> {
        return this._httpClient.get<Categorias[]>(this.API)
    }
    deleteCategorias(categoria: Categorias) {
        return this._httpClient.delete<Categorias>(this.API + '/' + categoria.id, this.httpOptions)
    }
    getCategoriasID(id: number): Observable<Categorias> {
        return this._httpClient.get<Categorias>(this.API + '/' + id)
    }
}