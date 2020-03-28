import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroFormComponent } from './cadastro-form/cadastro-form.component';
import { ExibirFormComponent } from './exibir-form/exibir-form.component';
import { EditarFormComponent } from './editar-form/editar-form.component';
import { CategoriaFormComponent } from './categoria-form/categoria-form.component';


const routes: Routes = [
  { path: 'produtos/novo', component: CadastroFormComponent},
  { path: 'produtos', component: ExibirFormComponent},
  { path: 'produtos/:id', component: EditarFormComponent},
  { path: 'categorias', component: CategoriaFormComponent},
  { path: '', pathMatch: 'full', redirectTo: 'produtos'}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
