import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { editarFormService } from './editar-form.service';
import { Produtos, Categorias } from './editar-form';
import { FormGroup, NgForm, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-editar-form',
  templateUrl: './editar-form.component.html',
  styleUrls: ['./editar-form.component.css']
})
export class EditarFormComponent implements OnInit {
  produto: Produtos;
  produtos: Produtos[] = [];
  produtoCodigo: Produtos;
  categoria: Categorias;
  categorias: Categorias[] = [];
  categoriaCodigo: Categorias;
  id: number = null;
  productForm: FormGroup;
  titulo: String = '';
  desc: String = '';
  preco: number = null;
  cat: String = '';
  isLoadingResults = false;

  constructor(public service: editarFormService,
    private router: Router,
    private route: ActivatedRoute,
    private api: editarFormService, 
    private formBuilder: FormBuilder
  ) {
    this.produtoCodigo = new Produtos();
    this.produto = new Produtos();
  }
  onSubmit(form) {
    console.log(form);
  }

  editProduto(produto: Produtos) {
    this.produto = { ...produto };
  }
  ngOnInit(): void {
    this.carregarCategorias();
    this.getProduto(this.route.snapshot.params['id']);
    this.productForm = this.formBuilder.group({
   titulo : [null, Validators.required],
   preco : [null, Validators.required],
   categoria : [null, Validators.required],
   descricao : [null, Validators.required]
  });
}

  getProduto(id) {
    this.api.getProduto(id).subscribe(produto => {
      this.id = produto.id;
      this.productForm.setValue({
        titulo: produto.titulo,
        preco: produto.preco,
        categoria: produto.categoria,
        descricao: produto.descricao,
      });
    });
  }
  updateProduto(form: NgForm) {
    this.isLoadingResults = true;
    this.api.updateProduto(this.id, form)
      .subscribe(form => {
        this.isLoadingResults = false;
      }, (err) => {
        console.log(err);
        this.isLoadingResults = false;
      }
      );
  }
  public carregarCategorias() {
    return this.service.listarCategoria().subscribe(res => {
      this.categorias = res;
    })
  }
}