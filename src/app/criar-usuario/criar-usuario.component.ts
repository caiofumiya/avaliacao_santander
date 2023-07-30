import { Component } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators, FormBuilder, FormGroup} from '@angular/forms';
import { Usuario } from 'src/models/usuario';

@Component({
  selector: 'app-criar-usuario',
  templateUrl: './criar-usuario.component.html',
  styleUrls: ['./criar-usuario.component.scss']
})

export class CriarUsuarioComponent {

  titles = ["","mr", "ms", "mrs", "miss", "dr"];
  genders = ["" ,"male", "female", "other"];
  minDate = new Date( 1900, 0, 0);
  maxDate = new Date();

  formsControls = {
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    title: new FormControl(""),
    gender: new FormControl(""),
    dateOfBirth: new FormControl(""),
    phone: new FormControl(''),
    picture: new FormControl(''),
    street: new FormControl(''),
		city: new FormControl(''),
		state: new FormControl(''),
		country: new FormControl('')
  }

  formUsuario!: FormGroup;

  ngOnInit() {
    this.createForm(new Usuario());
  }

  createForm(user: Usuario) {
    this.formUsuario = new FormGroup(this.formsControls);
  }

  limparForms() {
    console.log(this.formUsuario)
    this.createForm(new Usuario());
  }

  onSubmit() {

    console.log(this.formUsuario.value)

    let rawDadosUsuario = this.formUsuario.value;

    let dadosUsuario = { 
      ...rawDadosUsuario,
      dateOfBirth: rawDadosUsuario.dateOfBirth.toISOString(),
      location: {
        street: rawDadosUsuario.street,
        city: rawDadosUsuario.city,
        state: rawDadosUsuario.state,
        country: rawDadosUsuario.country,
        timezone: ((new Date()).getTimezoneOffset()/60),
      }
    }

    console.log(dadosUsuario);

    this.createForm(new Usuario());
  }
}