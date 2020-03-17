import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http';
import { Produto } from './cadastro-form';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class cadastroFormService{
    constructor(private _httpClient: HttpClient) {}
    private API : string = "http://localhost:3000/produto"; 

    buscar(id : number):Observable<Produto>
    {
        return this._httpClient.get<Produto>(`http://localhost:3000/produto)${id}`);
    }
    listarProdutos ():Observable<Produto[]>{
        return this._httpClient.get<Produto[]>(this.API);
    }

    gravar(produto : Produto):Observable<Produto>{
        return this._httpClient.post<Produto>(this.API, produto); 
    }
    
}