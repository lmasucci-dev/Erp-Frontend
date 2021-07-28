import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  nombreLower:string = 'lucas';
  nombreUpper:string = 'LUCAS';
  nombreCompleto:string = 'lucas masucci';

  fecha: Date = new Date(); // el dia de hoy

}
