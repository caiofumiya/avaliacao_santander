import { Component } from '@angular/core';

export interface DadosListaUsuarios {
  id: string;
  title: string;
  firstName: string;
  lastName: string;
  picture: string
}

const USER_DATA: DadosListaUsuarios[] = [
  {
    "id": "60d0fe4f5311236168a109ca",
    "title": "ms",
    "firstName": "Sara",
    "lastName": "Andersen",
    "picture": "https://randomuser.me/api/portraits/women/58.jpg"
  },
  {
      "id": "60d0fe4f5311236168a109cb",
      "title": "miss",
      "firstName": "Edita",
      "lastName": "Vestering",
      "picture": "https://randomuser.me/api/portraits/med/women/89.jpg"
  },
  {
      "id": "60d0fe4f5311236168a109cc",
      "title": "ms",
      "firstName": "Adina",
      "lastName": "Barbosa",
      "picture": "https://randomuser.me/api/portraits/med/women/28.jpg"
  },
  {
      "id": "60d0fe4f5311236168a109cd",
      "title": "mr",
      "firstName": "Roberto",
      "lastName": "Vega",
      "picture": "https://randomuser.me/api/portraits/med/men/25.jpg"
  },
  {
      "id": "60d0fe4f5311236168a109ce",
      "title": "mr",
      "firstName": "Rudi",
      "lastName": "Droste",
      "picture": "https://randomuser.me/api/portraits/med/men/83.jpg"
  },
];

@Component({
  selector: 'app-listagem-usuarios',
  templateUrl: './listagem-usuarios.component.html',
  styleUrls: ['./listagem-usuarios.component.scss']
})
export class ListagemUsuariosComponent {
  displayedColumns: string[] = ["id", "title", "firstName", "lastName"];
  dataSource = USER_DATA;
}
