import { Component, OnInit } from '@angular/core';
import { GetcursoService } from 'src/app/Servicios/getcurso.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  getcurso:any[]=[];
  constructor( public _services: GetcursoService) {
    this._services.getcurso<any[]>("").subscribe(data => {
        this.getcurso = data
        console.log(this.getcurso);
    })
  }

  ngOnInit() {
  }

}
