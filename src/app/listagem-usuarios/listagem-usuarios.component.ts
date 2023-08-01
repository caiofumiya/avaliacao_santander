import { Component, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableDataSourcePaginator } from '@angular/material/table';
import { DadosListaUsuarios } from 'src/models/usuarioListagem';
import { MainService } from '../main.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';

let usersList: DadosListaUsuarios[] = [];

@Component({
  selector: 'app-listagem-usuarios',
  templateUrl: './listagem-usuarios.component.html',
  styleUrls: ['./listagem-usuarios.component.scss']
})

export class ListagemUsuariosComponent {
    displayedColumns: string[] = ["id", "title", "firstName", "lastName", "picture", "actions"];
    dataSource:any;

    constructor(
        private mainService: MainService,
        private dialog: MatDialog
    ) { }

    @ViewChild(MatPaginator)
    paginator!: MatPaginator;

    ngOnInit() {
        this.mainService.listUsers()
            .then(response => {
                this.dataSource = new MatTableDataSource<DadosListaUsuarios>(response);
                this.dataSource.paginator = this.paginator;
            });
    }

    deleteUser(id: string) {
        const dialogRef = this.dialog.open(ConfirmDialogComponent,{
            data:{
                message: "Você deseja deletar o usuário de ID : "+id+" ?",
                buttonText: {
                    ok: 'Confirmar',
                    cancel: 'Voltar'
                }
            }
        });

        dialogRef.afterClosed().subscribe((confirmed: boolean) => {
            if (confirmed) {
                this.mainService.deleteUser(id);
            }
        });

    }
}
