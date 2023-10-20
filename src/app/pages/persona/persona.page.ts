import { Component, OnInit } from '@angular/core';
import { ApirestService } from 'src/app/services/apirest.service';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.page.html',
  styleUrls: ['./persona.page.scss'],
})
export class PersonaPage implements OnInit {
  listado = [];

  constructor( private api:ApirestService) { }

  ngOnInit() {
    this.listar();
  }

  listar()
  {
    this.api.getUsers(); //carga los datos a la propiedad listado del servicio
    this.listado = this.api.listado;

  }

}
