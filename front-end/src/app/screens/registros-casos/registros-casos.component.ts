import { Component, OnInit } from '@angular/core';
// import { NgImageSliderModule } from 'ng-image-slider';
@Component( {
  selector: 'app-registros-casos',
  templateUrl: './registros-casos.component.html',
  styleUrls: [ './registros-casos.component.scss' ]
} )
export class RegistrosCasosComponent implements OnInit {


  //#region Variavéis


  //#region ImageSlider
  imageObject = [{
    image: '../../../assets/images/cachorro.jpg',
    thumbImage: '../../../assets/images/cachorro.jpg',
}, {
    image: '../../../assets/images/gato.jpg',
    thumbImage: '../../../assets/images/gato.jpg'
}, {
    image: '../../../assets/images/coelho.jpg.jpg',
    thumbImage: '../../../assets/images/coelho.jpg',
},{
    image: '../../../assets/images/passarinho.jpg',
    thumbImage: '../../../assets/images/passarinho.jpg',
}, {
    image: '../../../assets/images/gato.jpg',
    thumbImage: '../../../assets/images/gato.jpg'
}, {
    image: '../../../assets/images/gato.jpg',
    thumbImage: '../../../assets/images/gato.jpg',
}];


  //#endregion ImageSlider

  //#endregion Variavéis


  constructor () { }

  
  ngOnInit (): void {
  }

}
