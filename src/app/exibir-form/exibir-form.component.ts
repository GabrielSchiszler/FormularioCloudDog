import { Component, OnInit } from '@angular/core';
import { exibirFormService } from './exibir-form.service';
import { Produto } from './exibir-form';
import { ActivatedRoute, Router } from '@angular/router';

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
  }

