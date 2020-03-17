import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ɵInternalFormsSharedModule}  from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroFormComponent } from './cadastro-form/cadastro-form.component';
import { ExibirFormComponent } from './exibir-form/exibir-form.component';
import { HttpClientModule } from '@angular/common/http';
import { exibirFormService } from './exibir-form/exibir-form.service';
import { cadastroFormService } from './cadastro-form/cadastro-form.service';
import { Routes } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

  const routes: Routes = [
    {path: '', component: ExibirFormComponent},
  ]

@NgModule({
  declarations: [
    AppComponent,
    CadastroFormComponent,
    ExibirFormComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [exibirFormService,cadastroFormService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
