import { Component } from '@angular/core';
import { FormControl, Validators, FormGroup} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Usuario } from 'src/models/usuario';
import { MainService } from '../main.service';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-atualizar-usuario',
  templateUrl: './atualizar-usuario.component.html',
  styleUrls: ['./atualizar-usuario.component.scss']
})

export class AtualizarUsuarioComponent {
  titles = ["","mr", "ms", "mrs", "miss", "dr"];
  genders = ["" ,"male", "female", "other"];
  minDate = new Date( 1900, 0, 0);
  maxDate = new Date();
  formsControls: any;
  formUsuario!: FormGroup;
  userId: any;

  constructor( 
    private route: ActivatedRoute,
    private mainService: MainService,
    private dialog: MatDialog
  ) {
    this.route.params.subscribe(params => this.userId = params['id']);
  }

  initFormsPreenchido = (dadosUsuario: Usuario) => {
    
    this.formsControls = {
      firstName: new FormControl(dadosUsuario.firstName, [Validators.required]),
      lastName: new FormControl(dadosUsuario.lastName, [Validators.required]),
      email: new FormControl({value: dadosUsuario.email, disabled: true}, [Validators.required, Validators.email]),
      title: new FormControl(dadosUsuario.title),
      gender: new FormControl(dadosUsuario.gender),
      dateOfBirth: new FormControl(dadosUsuario.dateOfBirth),
      phone: new FormControl(dadosUsuario.phone),
      picture: new FormControl(dadosUsuario.picture),
      street: new FormControl(dadosUsuario.location.street),
      city: new FormControl(dadosUsuario.location.city),
      state: new FormControl(dadosUsuario.location.state),
      country: new FormControl(dadosUsuario.location.country)
    }

    this.formUsuario = new FormGroup(this.formsControls);
  }

  ngOnInit() {
    this.mainService.getUser(this.userId)
      .then(response => {
        this.initFormsPreenchido(response);
      });
  }

  onSubmit() {

    const dialogRef = this.dialog.open(ConfirmDialogComponent,{
      data:{
        message: "Confirmar atualização de dados ?",
        buttonText: {
          ok: 'Salvar',
          cancel: 'Voltar'
        }
      }
    });

    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      if (confirmed) {

        let rawDadosUsuario = this.formUsuario.value;
        
        delete rawDadosUsuario.email;

        if (rawDadosUsuario.title === "") {
          delete rawDadosUsuario.title;
        }
        if (rawDadosUsuario.gender === "") {
          delete rawDadosUsuario.gender;
        }
        if (rawDadosUsuario.phone === "") {
          delete rawDadosUsuario.phone;
        }
        if (rawDadosUsuario.dateOfBirth === "") {
          delete rawDadosUsuario.dateOfBirth;
        }else{
          if (typeof rawDadosUsuario.dateOfBirth === "object") {
            rawDadosUsuario.dateOfBirth = rawDadosUsuario.dateOfBirth.toISOString();
          }
        }

        let dadosUsuario = { 
          ...rawDadosUsuario,
          location: {
            street: rawDadosUsuario.street,
            city: rawDadosUsuario.city,
            state: rawDadosUsuario.state,
            country: rawDadosUsuario.country,
            timezone: ((new Date()).getTimezoneOffset()/60),
          }
        }

        this.mainService.updateUser(dadosUsuario,this.userId);
        
      }
    });

    
  }
}
