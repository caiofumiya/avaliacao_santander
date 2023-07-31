import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Usuario } from 'src/models/usuario';
import { DialogComponent } from './dialog/dialog.component';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(
    public dialog: MatDialog
  ) { }

  async listUsers(): Promise<any> {
    const options = {method: 'GET', headers: {'app-id': '64b53aabc898804a50d2af57'}};
    let counter = 0;
    let accumulator: any[] = [];
    let lastResponseData: any[] = [];

    do {

      lastResponseData = [];

      const response = await (await fetch("https://dummyapi.io/data/v1/user?page="+ counter +"&limit=50", options)).json();
      
      lastResponseData = response.data;
      accumulator = [...accumulator,...response.data];
      counter++
      
    } while (lastResponseData.length != 0);

    return accumulator;
  }

  openDialog(titulo: string, mensagem: any): void {
    this.dialog.open(DialogComponent, {
      data: {
        titulo: titulo,
        mensagem: mensagem
      }
    });
  }

  createUser(newUserData: Usuario): any {

    const options = {
      method: 'POST',
      headers: {'app-id': '64b53aabc898804a50d2af57', 'Content-Type': 'application/json'},
      body: JSON.stringify(newUserData)
    };   
    
    fetch('https://dummyapi.io/data/v1/user/create', options)
      .then(response => response.json())
      .then(response => {
        if (response.hasOwnProperty('error')){
          this.openDialog("Erro na criação do usuário", JSON.stringify(response.data))
        }else {
          this.openDialog("Sucesso", "E-mail: "+response.email +" registrado com sucesso");
        }
      })
      .catch(err => {
        console.error(err);
      });

  }

  async getUser(id: string): Promise<any>{
    
    const options = {method: 'GET', headers: {'app-id': '64b53aabc898804a50d2af57'}};

    return await fetch("https://dummyapi.io/data/v1/user/"+id, options)
                    .then(response => response.json())
      
  }
  
  async updateUser(updatedUserData: any, userId: string): Promise<any>{
    const options = {
      method: 'PUT',
      headers: {'app-id': '64b53aabc898804a50d2af57', 'Content-Type': 'application/json'},
      body: JSON.stringify(updatedUserData)
    };
    
    fetch("https://dummyapi.io/data/v1/user/"+ userId, options)
      .then(response => response.json())
      .then(response => {
        if (response.hasOwnProperty('error')){          
          this.openDialog("Erro na atualização dos dados do usuário", JSON.stringify(response.data))
        }else {
          this.openDialog("Sucesso", "ID: "+userId +" atualizado com sucesso");
        }
      })
      .catch(err => {
        console.error(err);
      });
  }
}
