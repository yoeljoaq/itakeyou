import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApirestService } from 'src/app/services/apirest.service';

@Component({
  selector: 'app-datospersona',
  templateUrl: './datospersona.page.html',
  styleUrls: ['./datospersona.page.scss'],
})
export class DatospersonaPage implements OnInit {

  constructor(private api: ApirestService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }

  async leer() {
    let id = "";
    this.activatedRoute.paramMap.subscribe(async parametros => {
      id = parametros.get("id");
      // Realiza las operaciones necesarias con 'id' aquí dentro de esta función.
    });
  }
}

