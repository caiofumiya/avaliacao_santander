import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { MainService } from '../main.service';
import { Usuario } from 'src/models/usuario';

@Component({
  selector: 'app-exibicao-usuario',
  templateUrl: './exibicao-usuario.component.html',
  styleUrls: ['./exibicao-usuario.component.scss']
})
export class ExibicaoUsuarioComponent {
  userId: any;
  userData: Usuario | undefined;

  constructor( 
    private route: ActivatedRoute,
    private mainService: MainService,
    private dialog: MatDialog
  ) {
    this.route.params.subscribe(params => this.userId = params['id']);
  }

  ngOnInit() {
    this.mainService.getUser(this.userId)
      .then(response => {
        this.userData = response;
      });
  }
}
