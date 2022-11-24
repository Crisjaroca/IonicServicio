import { Component, OnInit } from '@angular/core';
import { GetpersonaService } from 'src/app/Servicios/getpersona.service';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.page.html',
  styleUrls: ['./personas.page.scss'],
})
export class PersonasPage implements OnInit {
  getpersona:any[]=[];
  constructor( public _services: GetpersonaService) {
    this._services.getpersona<any[]>("").subscribe(data => {
        this.getpersona = data
        console.log(this.getpersona);
    })
  }
  ngOnInit() {
  }

}
