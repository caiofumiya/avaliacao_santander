import { Component, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

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
  {
      "id": "60d0fe4f5311236168a109cf",
      "title": "mrs",
      "firstName": "Carolina",
      "lastName": "Lima",
      "picture": "https://randomuser.me/api/portraits/med/women/5.jpg"
  },
  {
      "id": "60d0fe4f5311236168a109d0",
      "title": "mr",
      "firstName": "Emre",
      "lastName": "Asikoglu",
      "picture": "https://randomuser.me/api/portraits/med/men/23.jpg"
  },
  {
      "id": "60d0fe4f5311236168a109d1",
      "title": "mr",
      "firstName": "Kent",
      "lastName": "Brewer",
      "picture": "https://randomuser.me/api/portraits/med/men/52.jpg"
  },
  {
      "id": "60d0fe4f5311236168a109d3",
      "title": "dr",
      "firstName": "Fahid",
      "lastName": "Chakal",
      "picture": "https://randomuser.me/api/portraits/med/men/7.jpg"
  },
  {
      "id": "60d0fe4f5311236168a109d4",
      "title": "mrs",
      "firstName": "Valentin",
      "lastName": "Ortega",
      "picture": "https://randomuser.me/api/portraits/med/men/3.jpg"
  },
  {
      "id": "60d0fe4f5311236168a109d6",
      "title": "mrs",
      "firstName": "Elisa",
      "lastName": "Lorenzo",
      "picture": "https://randomuser.me/api/portraits/med/women/89.jpg"
  },
  {
      "id": "60d0fe4f5311236168a109d7",
      "title": "mr",
      "firstName": "Leevi",
      "lastName": "Savela",
      "picture": "https://randomuser.me/api/portraits/med/men/67.jpg"
  },
  {
      "id": "60d0fe4f5311236168a109d8",
      "title": "mrs",
      "firstName": "Karoline",
      "lastName": "Sviggum",
      "picture": "https://randomuser.me/api/portraits/med/women/61.jpg"
  },
  {
      "id": "60d0fe4f5311236168a109d9",
      "title": "ms",
      "firstName": "Nuria",
      "lastName": "Leon",
      "picture": "https://randomuser.me/api/portraits/med/women/93.jpg"
  },
  {
      "id": "60d0fe4f5311236168a109da",
      "title": "dr",
      "firstName": "Lance",
      "lastName": "Foster",
      "picture": "https://randomuser.me/api/portraits/med/men/13.jpg"
  },
  {
      "id": "60d0fe4f5311236168a109db",
      "title": "ms",
      "firstName": "Naomi",
      "lastName": "Rodrigues",
      "picture": "https://randomuser.me/api/portraits/med/women/39.jpg"
  },
  {
      "id": "60d0fe4f5311236168a109dc",
      "title": "mr",
      "firstName": "Evan",
      "lastName": "Roux",
      "picture": "https://randomuser.me/api/portraits/med/men/59.jpg"
  },
  {
      "id": "60d0fe4f5311236168a109dd",
      "title": "mr",
      "firstName": "Miguel",
      "lastName": "Lima",
      "picture": "https://randomuser.me/api/portraits/med/men/31.jpg"
  },
  {
      "id": "60d0fe4f5311236168a109de",
      "title": "miss",
      "firstName": "Bessie",
      "lastName": "Burke",
      "picture": "https://randomuser.me/api/portraits/med/women/72.jpg"
  },
  {
      "id": "60d0fe4f5311236168a109df",
      "title": "mrs",
      "firstName": "Anaelle",
      "lastName": "Dumas",
      "picture": "https://randomuser.me/api/portraits/med/women/25.jpg"
  },
  {
      "id": "60d0fe4f5311236168a109e0",
      "title": "dr",
      "firstName": "Camilly",
      "lastName": "Norman",
      "picture": "https://randomuser.me/api/portraits/med/women/31.jpg"
  },
  {
      "id": "60d0fe4f5311236168a109e1",
      "title": "mr",
      "firstName": "James",
      "lastName": "Black",
      "picture": "https://randomuser.me/api/portraits/med/men/29.jpg"
  },
  {
      "id": "60d0fe4f5311236168a109e2",
      "title": "mr",
      "firstName": "Heinz-Georg",
      "lastName": "Fiedler",
      "picture": "https://randomuser.me/api/portraits/med/men/81.jpg"
  },
  {
      "id": "60d0fe4f5311236168a109e3",
      "title": "mr",
      "firstName": "Vetle",
      "lastName": "Aasland",
      "picture": "https://randomuser.me/api/portraits/med/men/97.jpg"
  },
  {
      "id": "60d0fe4f5311236168a109e4",
      "title": "mr",
      "firstName": "Pwry",
      "lastName": "Shylyrd",
      "picture": "https://randomuser.me/api/portraits/med/men/37.jpg"
  },
  {
      "id": "60d0fe4f5311236168a109e6",
      "title": "miss",
      "firstName": "Milla",
      "lastName": "Pollari",
      "picture": "https://randomuser.me/api/portraits/med/women/89.jpg"
  },
  {
      "id": "60d0fe4f5311236168a109e7",
      "title": "mr",
      "firstName": "Joey",
      "lastName": "Oliver",
      "picture": "https://randomuser.me/api/portraits/med/men/61.jpg"
  },
  {
      "id": "60d0fe4f5311236168a109e8",
      "title": "mrs",
      "firstName": "Cecilie",
      "lastName": "Mortensen",
      "picture": "https://randomuser.me/api/portraits/med/women/56.jpg"
  },
  {
      "id": "60d0fe4f5311236168a109e9",
      "title": "mr",
      "firstName": "Alfredo",
      "lastName": "Omahony",
      "picture": "https://randomuser.me/api/portraits/med/men/76.jpg"
  },
  {
      "id": "60d0fe4f5311236168a109ea",
      "title": "mrs",
      "firstName": "Mhrs",
      "lastName": "Hsyny",
      "picture": "https://randomuser.me/api/portraits/med/women/77.jpg"
  },
  {
      "id": "60d0fe4f5311236168a109eb",
      "title": "miss",
      "firstName": "Nella",
      "lastName": "Koivisto",
      "picture": "https://randomuser.me/api/portraits/med/women/77.jpg"
  },
  {
      "id": "60d0fe4f5311236168a109ec",
      "title": "mr",
      "firstName": "Lucas",
      "lastName": "Larsen",
      "picture": "https://randomuser.me/api/portraits/med/men/50.jpg"
  },
  {
      "id": "60d0fe4f5311236168a109ed",
      "title": "miss",
      "firstName": "Kayla",
      "lastName": "Bredesen",
      "picture": "https://randomuser.me/api/portraits/med/women/13.jpg"
  },
  {
      "id": "60d0fe4f5311236168a109ee",
      "title": "mrs",
      "firstName": "Beatriz",
      "lastName": "Gutierrez",
      "picture": "https://randomuser.me/api/portraits/med/women/31.jpg"
  },
  {
      "id": "60d0fe4f5311236168a109ef",
      "title": "miss",
      "firstName": "Melanie",
      "lastName": "Pilz",
      "picture": "https://randomuser.me/api/portraits/med/women/32.jpg"
  },
  {
      "id": "60d0fe4f5311236168a109f0",
      "title": "mr",
      "firstName": "Wouter-Jan",
      "lastName": "Wijnker",
      "picture": "https://randomuser.me/api/portraits/med/men/67.jpg"
  },
  {
      "id": "60d0fe4f5311236168a109f2",
      "title": "mr",
      "firstName": "Albert",
      "lastName": "Diez",
      "picture": "https://randomuser.me/api/portraits/med/men/73.jpg"
  },
  {
      "id": "60d0fe4f5311236168a109f3",
      "title": "mr",
      "firstName": "Donald",
      "lastName": "Hopkins",
      "picture": "https://randomuser.me/api/portraits/med/men/73.jpg"
  },
  {
      "id": "60d0fe4f5311236168a109f4",
      "title": "mr",
      "firstName": "Benjamin",
      "lastName": "Holland",
      "picture": "https://randomuser.me/api/portraits/med/men/58.jpg"
  },
  {
      "id": "60d0fe4f5311236168a109f5",
      "title": "ms",
      "firstName": "Charlotte",
      "lastName": "Legrand",
      "picture": "https://randomuser.me/api/portraits/med/women/77.jpg"
  },
  {
      "id": "60d0fe4f5311236168a109f6",
      "title": "miss",
      "firstName": "Madison",
      "lastName": "Ambrose",
      "picture": "https://randomuser.me/api/portraits/med/women/15.jpg"
  },
  {
      "id": "60d0fe4f5311236168a109f7",
      "title": "mrs",
      "firstName": "Jolanda",
      "lastName": "Lacroix",
      "picture": "https://randomuser.me/api/portraits/med/women/32.jpg"
  },
  {
      "id": "60d0fe4f5311236168a109f8",
      "title": "ms",
      "firstName": "Signe",
      "lastName": "Madsen",
      "picture": "https://randomuser.me/api/portraits/med/women/84.jpg"
  },
  {
      "id": "60d0fe4f5311236168a109f9",
      "title": "mr",
      "firstName": "Marius",
      "lastName": "Larsen",
      "picture": "https://randomuser.me/api/portraits/med/men/54.jpg"
  },
  {
      "id": "60d0fe4f5311236168a109fa",
      "title": "ms",
      "firstName": "Ann",
      "lastName": "Mason",
      "picture": "https://randomuser.me/api/portraits/med/women/18.jpg"
  },
  {
      "id": "60d0fe4f5311236168a109fb",
      "title": "mr",
      "firstName": "Sohan",
      "lastName": "Pierre",
      "picture": "https://randomuser.me/api/portraits/med/men/77.jpg"
  },
  {
      "id": "60d0fe4f5311236168a109fc",
      "title": "mr",
      "firstName": "Gonzaga",
      "lastName": "Ribeiro",
      "picture": "https://randomuser.me/api/portraits/med/men/10.jpg"
  },
  {
      "id": "60d0fe4f5311236168a109fd",
      "title": "mr",
      "firstName": "Dylan",
      "lastName": "Vasquez",
      "picture": "https://randomuser.me/api/portraits/med/men/66.jpg"
  },
  {
      "id": "60d0fe4f5311236168a109fe",
      "title": "mr",
      "firstName": "AndrÃ©",
      "lastName": "Robert",
      "picture": "https://randomuser.me/api/portraits/med/men/9.jpg"
  },
  {
      "id": "60d0fe4f5311236168a109ff",
      "title": "mrs",
      "firstName": "Josefina",
      "lastName": "Calvo",
      "picture": "https://randomuser.me/api/portraits/med/women/3.jpg"
  }
];

@Component({
  selector: 'app-listagem-usuarios',
  templateUrl: './listagem-usuarios.component.html',
  styleUrls: ['./listagem-usuarios.component.scss']
})
export class ListagemUsuariosComponent {
  displayedColumns: string[] = ["id", "title", "firstName", "lastName"];
  dataSource = new MatTableDataSource<DadosListaUsuarios>(USER_DATA);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
