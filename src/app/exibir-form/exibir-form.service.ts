import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http';
import { Produto } from './exibir-form';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class exibirFormService{
    constructor(private _httpClient: HttpClient) {}
    private readonly API = `${environment.API}produto`
    listarProdutos ():Observable<Produto[]>{
        return this._httpClient.get<Produto[]>(this.API);
    }

    gravar(produto : Produto):Observable<Produto>{
        return this._httpClient.post<Produto>(this.API, produto);
    }
    
    deletar (produto : Produto):Observable<Produto[]>{
        return this._httpClient.delete<Produto[]>(this.API);
    }
}