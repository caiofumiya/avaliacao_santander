import { Component } from '@angular/core';
import { FormControl, Validators, FormGroup} from '@angular/forms';
import { Usuario } from 'src/models/usuario';

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
  };

  massaTesteUpdate = {
    "id": "60d0fe4f5311236168a10a01",
    "title": "mr",
    "firstName": "Jesus",
    "lastName": "Riley",
    "picture": "https://randomuser.me/api/portraits/med/men/45.jpg",
    "gender": "male",
    "email": "jesus.riley@example.com",
    "dateOfBirth": "1960-08-20T08:36:37.039Z",
    "phone": "02-2018-4571",
    "location": {
      "street": "6786, Pecan Acres Ln",
      "city": "Perth",
      "state": "New South Wales",
      "country": "Australia",
      "timezone": "+4:30"
    },
    "registerDate": "2021-06-21T21:02:16.799Z",
    "updatedDate": "2021-06-21T21:02:16.799Z"
  }


  initFormsPreenchido = (dadosUsuario: Usuario) => {
    
    this.formsControls = {
      firstName: new FormControl(dadosUsuario.firstName, [Validators.required]),
      lastName: new FormControl(dadosUsuario.lastName, [Validators.required]),
      email: new FormControl(dadosUsuario.email, [Validators.required, Validators.email]),
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

  }

  formUsuario!: FormGroup;

  ngOnInit() {
    this.initFormsPreenchido(this.massaTesteUpdate);
    this.formUsuario = new FormGroup(this.formsControls);
  }

  onSubmit() {

    let rawDadosUsuarioAtualizados = this.formUsuario.value;

    let dadosUsuario = { 
      ...rawDadosUsuarioAtualizados,
      dateOfBirth: rawDadosUsuarioAtualizados.dateOfBirth.toISOString(),
      location: {
        street: rawDadosUsuarioAtualizados.street,
        city: rawDadosUsuarioAtualizados.city,
        state: rawDadosUsuarioAtualizados.state,
        country: rawDadosUsuarioAtualizados.country,
        timezone: ((new Date()).getTimezoneOffset()/60),
      }
    }

    console.log(dadosUsuario);

    this.formUsuario.reset();
  }
}
