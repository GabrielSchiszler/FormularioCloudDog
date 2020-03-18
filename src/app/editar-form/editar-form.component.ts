import { Component, OnInit } from '@angular/core';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { editarFormService } from './editar-form.service';
import { Produto } from '../cadastro-form/cadastro-form';
import { timeoutWith } from 'rxjs/operators';

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
  id: string;
  request: Produto[];
  constructor(public service: editarFormService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.produtoCodigo = new Produto();
    this.codigo = 0;
    this.produto = new Produto();
    
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.service.getProdutosID(this.id).subscribe(res =>{
    })
  }
  editProduto(produto: Produto) {
    this.produto = { ...produto };
  }
}
