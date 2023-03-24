import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  photos = [
    {
      url: "https://feijoadasimulator.top/br/sources/2932.jpeg",
      description: "Nando Moura careca"
    },
    {
      url: "https://images4.alphacoders.com/936/936378.jpg",
      description: "Universo"
    }
  ]

}
