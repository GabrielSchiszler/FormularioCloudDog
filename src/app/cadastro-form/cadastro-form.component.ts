import { Component, OnInit } from '@angular/core';
import { cadastroFormService } from './cadastro-form.service';
import { Produto } from './cadastro-form';

@Component({
  selector: 'app-cadastro-form',
  templateUrl: './cadastro-form.component.html',
  styleUrls: ['./cadastro-form.component.css'],
  preserveWhitespaces: true
})
export class CadastroFormComponent implements OnInit {
  produto : Produto;
  codigo : number = 0;
  produtos : Produto[]=[];
  produtoCodigo : Produto;
  message : string;

  onSubmit(form){
    console.log(form);
  }


  constructor(public service: cadastroFormService) {   
    this.produtoCodigo = new Produto();
    this.codigo = 0;
    this.produto = new Produto();
   }
   confirmationString : String = "Novo produto foi adicionado";
   adicionado: boolean = false;

  ngOnInit(): void {

    this.carregarProdutos();
  }

  public carregarProdutos(){
    return this.service.listarProdutos().subscribe(res=>{
      this.produtos = res;
      this.carregarProdutos();
    })
  }
  public buscarCodigo(){
    this.service.buscar(this.codigo).subscribe(res=>{
      this.produtoCodigo = res;
      this.message =``;
    },(error=>{
      this.message = "Erro, não encontrado";
      console.log(`Erro, não encontrado.`, error);
      this.produtoCodigo = null;
    })
    )
  }
  public salvar(){
    this.service.gravar(this.produto).subscribe(res=>{
      this.adicionado = true;
      this.carregarProdutos();
      this.produto = new Produto();
    })
  } 
}
