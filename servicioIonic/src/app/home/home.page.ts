import { Component } from '@angular/core';
import { GetpersonaService } from '../Servicios/getpersona.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor( public _services: GetpersonaService) {  }

}
