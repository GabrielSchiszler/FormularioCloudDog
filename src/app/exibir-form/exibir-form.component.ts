import { Component, OnInit } from '@angular/core';
import { exibirFormService } from './exibir-form.service';
import { Produtos } from './exibir-form';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-exibir-form',
  templateUrl: './exibir-form.component.html',
  styleUrls: ['./exibir-form.component.css'],
  preserveWhitespaces: true
})
export class ExibirFormComponent implements OnInit {
  produto: Produtos;
  codigo: number = 0;
  produtos: Produtos[] = [];
  produtoCodigo: Produtos;
  message: string;

  constructor(public service: exibirFormService,
    private router: Router,
    private route: ActivatedRoute,
    private produtoService: exibirFormService
  ) {
    this.produtoCodigo = new Produtos();
    this.codigo = 0;
    this.produto = new Produtos();
  }

  ngOnInit(): void {
    this.getProdutos();
  }
    getProdutos() {
      this.produtoService.getProdutos().subscribe((produto: Produtos[]) => {
        this.produtos = produto;
      });
    }
  
    deleteProdutos(produto: Produtos) {
      this.produtoService.deleteProdutos(produto).subscribe(() => {
        this.getProdutos();
      });
    }
  }

