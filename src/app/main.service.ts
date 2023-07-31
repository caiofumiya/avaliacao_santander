import { Injectable } from '@angular/core';
import { Usuario } from 'src/models/usuario';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor() { }

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

  createUser(newUserData: Usuario): any {

    let createRespoonse;

    // const usuarioTeste: Usuario = { 
    //   title: "mrs",
    //   firstName: "caio",
    //   lastName: "Fumiya",
    //   gender: "male",
    //   email: "caio2@fumiya.com",
    //   dateOfBirth: "1960-08-20T08:36:37.039Z",
    //   phone: "999999999",
    //   picture: "https://randomuser.me/api/portraits/women/12.jpg",
    //   location: {
    //     street: "Rua Joao, Belem, 555",
    //     city: "São Paulo",
    //     state: "São Paulo",
    //     country: "São Paulo",
    //     timezone: "3"
    //   }
    // };

    const options = {
      method: 'POST',
      headers: {'app-id': '64b53aabc898804a50d2af57', 'Content-Type': 'application/json'},
      body: JSON.stringify(newUserData)
    };

    console.log(options);
    
    
    fetch('https://dummyapi.io/data/v1/user/create', options)
      .then(response => response.json())
      .then(response => {
        console.log(response);
        createRespoonse = response;
      })
      .catch(err => {
        console.error(err);
        createRespoonse = err;
      });
  }

}
