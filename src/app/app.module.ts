import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ListagemUsuariosComponent } from './listagem-usuarios/listagem-usuarios.component';
import { CriarUsuarioComponent } from './criar-usuario/criar-usuario.component';
import { AtualizarUsuarioComponent } from './atualizar-usuario/atualizar-usuario.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule, } from '@angular/material/datepicker';
import { MAT_DATE_LOCALE, MatNativeDateModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
import { Dialog } from '@angular/cdk/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { ExibicaoUsuarioComponent } from './exibicao-usuario/exibicao-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ListagemUsuariosComponent,
    CriarUsuarioComponent,
    AtualizarUsuarioComponent,
    PageNotFoundComponent,
    DialogComponent,
    ConfirmDialogComponent,
    ExibicaoUsuarioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDividerModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule, 
    MatCardModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule,
    MatProgressSpinnerModule
  ],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'pt-BR'}
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    Dialog
  ]
})
export class AppModule { }
