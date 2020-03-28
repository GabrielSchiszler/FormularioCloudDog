import { Component, OnInit } from '@angular/core';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { editarFormService } from './editar-form.service';
import { Produtos, Categorias } from './editar-form';

@Component({
  selector: 'app-editar-form',
  templateUrl: './editar-form.component.html',
  styleUrls: ['./editar-form.component.css']
})
export class EditarFormComponent implements OnInit {
  produto: Produtos;
  codigo: number = 0;
  produtos: Produtos[] = [];
  produtoCodigo: Produtos;
  message: string;
  categoria: Categorias;
  categorias: Categorias[] = [];
  categoriaCodigo: Categorias;

  constructor(public service: editarFormService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.produtoCodigo = new Produtos();
    this.codigo = 0;
    this.produto = new Produtos();
  }
  onSubmit(form){
    console.log(form);
  }
  confirmationString : String = "Novo produto foi adicionado";
  adicionado: boolean = false;

  editProduto(produto: Produtos) {
    this.produto = { ...produto };
  }

  ngOnInit(): void {
    this.carregarCategorias();
  }
  
  public carregarCategorias(){
    return this.service.listarCategoria().subscribe(res=>{
      this.categorias = res;
    })
  }
}