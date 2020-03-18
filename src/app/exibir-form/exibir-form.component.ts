import { Component, OnInit, ViewChildren, ViewChild } from '@angular/core';
import { exibirFormService } from './exibir-form.service';
import { Produto } from './exibir-form';
import { Observable } from 'rxjs';
import { ActivatedRoute, Routes, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

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
    private route: ActivatedRoute,
    private produtoService: exibirFormService
  ) {
    this.produtoCodigo = new Produto();
    this.codigo = 0;
    this.produto = new Produto();
  }

  ngOnInit(): void {
    this.getProdutos();
  }
    // defini se um produto será criado ou atualizado
    salvarProduto(form: NgForm) {
      if (this.produto.id !== undefined) {
        this.produtoService.updateProdutos(this.produto).subscribe(() => {
          this.cleanForm(form);
        });
      } else {
        this.produtoService.saveProdutos(this.produto).subscribe(() => {
          this.cleanForm(form);
        });
      }
    }
    getProdutos() {
      this.produtoService.getProdutos().subscribe((produto: Produto[]) => {
        this.produtos = produto;
      });
    }
  
    deleteProdutos(produto: Produto) {
      this.produtoService.deleteProdutos(produto).subscribe(() => {
        this.getProdutos();
      });
    }
    editProduto(produto: Produto) {
      this.produto = { ...produto };
    }
    
    cleanForm(form: NgForm) {
      this.getProdutos();
      form.resetForm();
      this.produto = {} as Produto;
    }
  
  }

