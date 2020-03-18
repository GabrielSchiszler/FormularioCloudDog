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
import { Routes, RouterModule } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatIconModule } from "@angular/material/icon";
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatBadgeModule } from '@angular/material/badge';
import { EditarFormComponent } from './editar-form/editar-form.component';
  const routes: Routes = [
    {path: '', component: CadastroFormComponent},
  ]

const Material = [
  MatButtonModule,
  MatButtonToggleModule,
  MatIconModule,
  MatBadgeModule,
  MatProgressSpinnerModule,
  MatToolbarModule,
  MatSidenavModule
];

@NgModule({
  declarations: [
    AppComponent,
    CadastroFormComponent,
    ExibirFormComponent,
    EditarFormComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      { path: '', component: CadastroFormComponent },
      { path: 'produtos', component: ExibirFormComponent }
    ])
  ],
  providers: [exibirFormService,cadastroFormService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }