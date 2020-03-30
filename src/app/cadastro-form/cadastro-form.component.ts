import { Component, OnInit } from '@angular/core';
import { cadastroFormService } from './cadastro-form.service';
import { Produtos, Categorias } from './cadastro-form';

@Component({
  selector: 'app-cadastro-form',
  templateUrl: './cadastro-form.component.html',
  styleUrls: ['./cadastro-form.component.css'],
  preserveWhitespaces: true
})
export class CadastroFormComponent implements OnInit {
  produto: Produtos;
  categoria: Categorias;
  categorias: Categorias[] = [];
  codigo: number = 0;
  produtos: Produtos[] = [];
  categoriaCodigo: Categorias;
  produtoCodigo: Produtos;
  message : string;

  onSubmit(form){
    console.log(form);
  }


  constructor(public service: cadastroFormService) {   
    this.produtoCodigo = new Produtos();
    this.categoriaCodigo = new Categorias();
    this.codigo = 0;
    this.produto = new Produtos();
    this.categoria = new Categorias();
   }
   confirmationString : String = "Novo produto foi adicionado";
   adicionado: boolean = false;

  ngOnInit(): void {
    this.carregarCategorias();
  }
  public carregarCategorias(){
    return this.service.listarCategoria().subscribe(res=>{
      this.categorias = res;
    })
  }
  public salvar(){
    alert('PRODUTO CADASTRADO COM SUCESSO!');
    this.service.gravar(this.produto).subscribe(res=>{
      this.adicionado = true;
      this.produto = new Produtos();
    })
  } 
}
