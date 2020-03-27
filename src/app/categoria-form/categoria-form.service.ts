import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Cadastro } from './categoria-form';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
    providedIn: 'root'
})
export class categoriaFormService {
    constructor(private _httpClient: HttpClient) { }
    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }
    private API: string = "http://localhost:3000/cadastro";
    private readonly APII = `${environment.API}produto`;

    gravarcat(categoria: Cadastro): Observable<Cadastro> {
        return this._httpClient.post<Cadastro>(this.API, categoria);
    }
    listarCategorias(): Observable<Cadastro[]> {
        return this._httpClient.get<Cadastro[]>(this.API);
    }
    getCategorias(): Observable<Cadastro[]> {
        return this._httpClient.get<Cadastro[]>(this.API)
    }
    deleteCategorias(cadastro: Cadastro) {
        return this._httpClient.delete<Cadastro>(this.API + '/' + cadastro.id, this.httpOptions)
    }
    getCategoriasID(id: number): Observable<Cadastro> {
        return this._httpClient.get<Cadastro>(this.API + '/' + id)
    }
}