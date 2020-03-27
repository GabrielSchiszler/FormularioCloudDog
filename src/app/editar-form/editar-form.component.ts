import { Component, OnInit } from '@angular/core';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { editarFormService } from './editar-form.service';
import { Produto, Cadastro } from '../editar-form/editar-form';

@Component({
  selector: 'app-editar-form',
  templateUrl: './editar-form.component.html',
  styleUrls: ['./editar-form.component.css']
})
export class EditarFormComponent implements OnInit {
  produto: Produto;
  codigo: number = 0;
  produtos: Produto[] = [];
  produtoCodigo: Produto;
  message: string;
  cadastro: Cadastro;
  cadastros: Cadastro[] = [];
  categoriaCodigo: Cadastro;

  constructor(public service: editarFormService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.produtoCodigo = new Produto();
    this.codigo = 0;
    this.produto = new Produto();
  }
  editProduto(produto: Produto) {
    this.produto = { ...produto };
  }

  ngOnInit(): void {
    this.carregarCategorias();
  }
  public carregarCategorias(){
    return this.service.listarCategoria().subscribe(res=>{
      this.cadastros = res;
    })
  }
}