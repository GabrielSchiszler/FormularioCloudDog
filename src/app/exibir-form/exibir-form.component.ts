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
    this.carregarProdutos();
  }
  
  getProdutos() {
    this.produtoService.getProdutos().subscribe((produto: Produtos[]) => {
      this.produtos = produto;
    });
  }
  public carregarProdutos(){
    return this.service.listarProdutos().subscribe(res=>{
      this.produtos = res;
    })
  }
  onEdit(id) {
    this.router.navigate(['/produtos/', id], { relativeTo: this.route });
  }

  deleteProdutos(produto: Produtos) {
    this.produtoService.deleteProdutos(produto).subscribe(() => {
      this.getProdutos();
    });
  }
}

