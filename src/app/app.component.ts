import { Component, OnInit } from '@angular/core';
import { Produtos } from './cadastro-form/cadastro-form';
import { exibirFormService } from './exibir-form/exibir-form.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  
  produto = {} as Produtos;
  produtos: Produtos[];

  constructor(private produtoService: exibirFormService) {}
  
  ngOnInit() {
  }
}