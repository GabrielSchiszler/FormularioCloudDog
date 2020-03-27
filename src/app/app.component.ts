import { Component, OnInit } from '@angular/core';
import { Produto } from './cadastro-form/cadastro-form';
import { exibirFormService } from './exibir-form/exibir-form.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  
  produto = {} as Produto;
  produtos: Produto[];

  constructor(private produtoService: exibirFormService) {}
  
  ngOnInit() {
  }
}