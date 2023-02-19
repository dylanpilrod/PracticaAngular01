import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  imagen: string | undefined;
  
  cambiaImagen(nuevaImagen: string) {
    this.imagen = nuevaImagen;
  }
  estilo = {
    'background-color': 'black',
    'height': 'auto',
    'width': 'auto',
    'padding': '5px',
    'display': 'flex',
    'margin': '4px'
  };
  cambiaColor(nuevoColor: string) {
    this.estilo['background-color'] = nuevoColor;
  }

  texto: string = '';

  aplicarTexto(nuevoTexto: string) {
    this.texto = nuevoTexto;
  }

}
