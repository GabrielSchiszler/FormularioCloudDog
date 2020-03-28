import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http';
import { Produtos, Categorias } from './cadastro-form';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class cadastroFormService{
    constructor(private _httpClient: HttpClient) {}
    private API : string = "http://localhost:3000/produtos";
    private APII : string = "http://localhost:3000/categorias"

    listarCategoria ():Observable<Categorias[]>{
        return this._httpClient.get<Categorias[]>(this.APII);
    }
    gravar(produto : Produtos):Observable<Categorias>{
        return this._httpClient.post<Categorias>(this.API, produto); 
    }
    
}