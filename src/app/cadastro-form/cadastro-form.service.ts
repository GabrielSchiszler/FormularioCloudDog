import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http';
import { Produto, Cadastro } from './cadastro-form';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class cadastroFormService{
    constructor(private _httpClient: HttpClient) {}
    private API : string = "http://localhost:3000/produto";
    private APII : string = "http://localhost:3000/cadastro"

    listarCategoria ():Observable<Cadastro[]>{
        return this._httpClient.get<Cadastro[]>(this.APII);
    }
    gravar(produto : Produto):Observable<Produto>{
        return this._httpClient.post<Produto>(this.API, produto); 
    }
    
}