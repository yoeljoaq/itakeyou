import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
HttpClient

@Injectable({
  providedIn: 'root'
})
export class ApirestService {
  listado = [];
  item: any;
  private urlAPI= 'https://jsonplaceholder.typicode.com/';

  constructor(private httpClient: HttpClient) { }
  //metodo para traer a todos los usuarios que proveera la API

  getUsers(){
    //definir url para solicitud

    let url = this.urlAPI + "users";
    this.listado = []; //limpiar propiedad
    return new Promise((resolve, reject) =>{
      this.httpClient.get(url).subscribe((data: []) => {
        resolve(data);
        data.forEach(item => { this.listado.push(item);})
      },
      error =>
      {
        console.log("Error en la comunicacion con el Servidor");
      });
    });


  }
}