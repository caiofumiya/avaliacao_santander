import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListagemUsuariosComponent } from './listagem-usuarios/listagem-usuarios.component';
import { CriarUsuarioComponent } from './criar-usuario/criar-usuario.component';
import { BuscarUsuarioComponent } from './buscar-usuario/buscar-usuario.component';
import { AtualizarUsuarioComponent } from './atualizar-usuario/atualizar-usuario.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'listagem-usuarios', component: ListagemUsuariosComponent },
  { path: 'criar-usuario', component: CriarUsuarioComponent },
  { path: 'buscar-usuario', component: BuscarUsuarioComponent },
  { path: 'atualizar-usuario', component: AtualizarUsuarioComponent },
  { path: '',   redirectTo: '/listagem-usuarios', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
