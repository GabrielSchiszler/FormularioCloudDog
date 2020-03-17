import { Component, OnInit, ViewChildren, ViewChild } from '@angular/core';
import { exibirFormService } from './exibir-form.service';
import { Produto } from './exibir-form';
import { Observable } from 'rxjs';
import { ActivatedRoute, Routes, Router } from '@angular/router';

@Component({
  selector: 'app-exibir-form',
  templateUrl: './exibir-form.component.html',
  styleUrls: ['./exibir-form.component.css'],
  preserveWhitespaces: true
})
export class ExibirFormComponent implements OnInit {
  produto: Produto;
  codigo: number = 0;
  produtos: Produto[] = [];
  produtoCodigo: Produto;
  message: string;

  constructor(public service: exibirFormService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.produtoCodigo = new Produto();
    this.codigo = 0;
    this.produto = new Produto();
  }

  ngOnInit(): void {
    this.carregarProdutos();
  }

  public carregarProdutos() {
    return this.service.listarProdutos().subscribe(res => {
      this.produtos = res;
      this.carregarProdutos();
    })
  }
  public salvar() {
    this.service.gravar(this.produto).subscribe(res => {
      console.log(`Produto Gravado ...`);
      this.carregarProdutos();
    })
  }
  onDelete(produto) {
  }
  onEdit(id) {
    this.router.navigate(['editar', id]), { relativeTo: this.route };
  }
}
