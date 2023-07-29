import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ListagemUsuariosComponent } from './listagem-usuarios/listagem-usuarios.component';
import { BuscarUsuarioComponent } from './buscar-usuario/buscar-usuario.component';
import { CriarUsuarioComponent } from './criar-usuario/criar-usuario.component';
import { AtualizarUsuarioComponent } from './atualizar-usuario/atualizar-usuario.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ListagemUsuariosComponent,
    BuscarUsuarioComponent,
    CriarUsuarioComponent,
    AtualizarUsuarioComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
