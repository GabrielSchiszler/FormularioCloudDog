import { Component, OnInit } from '@angular/core';
import { cadastroFormService } from './cadastro-form.service';
import { Produto, Cadastro } from './cadastro-form';

@Component({
  selector: 'app-cadastro-form',
  templateUrl: './cadastro-form.component.html',
  styleUrls: ['./cadastro-form.component.css'],
  preserveWhitespaces: true
})
export class CadastroFormComponent implements OnInit {
  produto: Produto;
  cadastro: Cadastro;
  cadastros: Cadastro[] = [];
  codigo: number = 0;
  produtos: Produto[] = [];
  categoriaCodigo: Cadastro;
  produtoCodigo: Produto;
  message : string;

  onSubmit(form){
    console.log(form);
  }


  constructor(public service: cadastroFormService) {   
    this.produtoCodigo = new Produto();
    this.categoriaCodigo = new Cadastro();
    this.codigo = 0;
    this.produto = new Produto();
    this.cadastro = new Cadastro();
   }
   confirmationString : String = "Novo produto foi adicionado";
   adicionado: boolean = false;

  ngOnInit(): void {
    this.carregarCategorias();
  }
  public carregarCategorias(){
    return this.service.listarCategoria().subscribe(res=>{
      this.cadastros = res;
    })
  }
  public salvar(){
    this.service.gravar(this.produto).subscribe(res=>{
      this.adicionado = true;
      this.produto = new Produto();
      alert('PRODUTO CADASTRADO COM SUCESSO!');
    })
  } 
}
