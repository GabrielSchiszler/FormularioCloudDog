import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroFormComponent } from './cadastro-form/cadastro-form.component';
import { ExibirFormComponent } from './exibir-form/exibir-form.component';
import { EditarFormComponent } from './editar-form/editar-form.component';
import { CategoriaFormComponent } from './categoria-form/categoria-form.component';


const routes: Routes = [
  { path: 'cadastroForm', component: CadastroFormComponent},
  { path: 'exibirForm', component: ExibirFormComponent},
  { path: 'editarForm/:id', component: EditarFormComponent},
  { path: 'categoriaForm', component: CategoriaFormComponent},
  { path: '', pathMatch: 'full', redirectTo: 'exibirForm'}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
