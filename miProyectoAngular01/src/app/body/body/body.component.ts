import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {

  tablaBadBunny = "Benito Antonio Martinez Ocasio";
  tablaFeid = "Salomón Villada Hoyos";
  tablaAnuel = "Emmanuel Gazmey Santiago";

  cantantes = [
      { pais: 'Puerto Rico, Almirante Sur', edad: 28, albumes: '5', reproducciones: '18.300 millones de reproducciones' },
      { pais: 'Colombia, Medellin', edad: 30 , albumes: '5', reproducciones: '1.500 millones de reproducciones' },
      { pais: 'Puerto Rico, Carolina', edad: 30, albumes: '6', reproducciones: '2.000 millones de reproducciones' }
    ];

  
}
