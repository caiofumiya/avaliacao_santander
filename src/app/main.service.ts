import { Injectable } from '@angular/core';

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

}
