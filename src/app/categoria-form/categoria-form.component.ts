import { Component, OnInit } from '@angular/core';
import { categoriaFormService } from './categoria-form.service';
import { Categorias } from './categoria-form';

@Component({
  selector: 'app-categoria-form',
  templateUrl: './categoria-form.component.html',
  styleUrls: ['./categoria-form.component.css'],
  preserveWhitespaces: true
})
export class CategoriaFormComponent implements OnInit {
  categoria: Categorias;
  categorias: Categorias[] = [];
  codigo: number = 0;
  categoriaCodigo: Categorias;
  message: string;

  onSubmit(form) {
    console.log(form);
  }

  constructor(public service: categoriaFormService) {
    this.categoriaCodigo = new Categorias();
    this.codigo = 0;
    this.categoria = new Categorias();
  }
  adicionado: boolean = false;

  ngOnInit(): void {
    this.getCategorias();
  }

  public salvarcat() {
    this.service.gravarcat(this.categoria).subscribe(res => {
      this.adicionado = true;
      this.categoria = new Categorias();
      this.carregarCategorias();
      alert('CATEGORIA CADASTRADO COM SUCESSO!');
    })
  }
  public carregarCategorias() {
    return this.service.listarCategorias().subscribe(res => {
      this.categorias = res;
    })
  }
  deleteCategorias(categoria: Categorias) {
    this.service.deleteCategorias(categoria).subscribe(() => {
      this.getCategorias();
    });
  }
  getCategorias() {
    this.service.getCategorias().subscribe((categoria: Categorias[]) => {
      this.categorias = categoria;
    });
  }
}
