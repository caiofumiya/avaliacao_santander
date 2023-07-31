import { Component, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableDataSourcePaginator } from '@angular/material/table';
import { DadosListaUsuarios } from 'src/models/usuarioListagem';
import { MainService } from '../main.service';

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
        private mainService: MainService
    ) { }
    

    @ViewChild(MatPaginator)
    paginator!: MatPaginator;

    async ngOnInit() {
        usersList = await this.mainService.listUsers();
        this.dataSource = new MatTableDataSource<DadosListaUsuarios>(usersList);
        this.dataSource.paginator = this.paginator;
    }
}
