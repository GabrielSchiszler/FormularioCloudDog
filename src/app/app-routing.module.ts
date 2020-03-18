import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroFormComponent } from './cadastro-form/cadastro-form.component';
import { ExibirFormComponent } from './exibir-form/exibir-form.component';
import { EditarFormComponent } from './editar-form/editar-form.component';


const routes: Routes = [
  { path: 'cadastroForm', component: CadastroFormComponent},
  { path: 'exibirForm', component: ExibirFormComponent},
  { path: 'editarForm/:id', component: EditarFormComponent},
  { path: '', pathMatch: 'full', redirectTo: 'cadastroForm'}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
