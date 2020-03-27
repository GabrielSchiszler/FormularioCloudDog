import { Component, OnInit } from '@angular/core';
import { categoriaFormService } from './categoria-form.service';
import { Cadastro } from './categoria-form';

@Component({
  selector: 'app-categoria-form',
  templateUrl: './categoria-form.component.html',
  styleUrls: ['./categoria-form.component.css'],
  preserveWhitespaces: true
})
export class CategoriaFormComponent implements OnInit {
  cadastro: Cadastro;
  cadastros: Cadastro[] = [];
  codigo: number = 0;
  categoriaCodigo: Cadastro;
  message: string;

  onSubmit(form) {
    console.log(form);
  }

  constructor(public service: categoriaFormService) {
    this.categoriaCodigo = new Cadastro();
    this.codigo = 0;
    this.cadastro = new Cadastro();
  }
  adicionado: boolean = false;

  ngOnInit(): void {
    this.getCategorias();
  }

  public salvarcat() {
    this.service.gravarcat(this.cadastro).subscribe(res => {
      this.adicionado = true;
      this.cadastro = new Cadastro();
      this.carregarCategorias();
      alert('CATEGORIA CADASTRADO COM SUCESSO!');
    })
  }
  public carregarCategorias() {
    return this.service.listarCategorias().subscribe(res => {
      this.cadastros = res;
    })
  }
  deleteCategorias(cadastro: Cadastro) {
    this.service.deleteCategorias(cadastro).subscribe(() => {
      this.getCategorias();
    });
  }
  getCategorias() {
    this.service.getCategorias().subscribe((cadastro: Cadastro[]) => {
      this.cadastros = cadastro;
    });
  }
}
