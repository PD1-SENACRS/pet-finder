import { Component, OnInit } from '@angular/core';

@Component( {
  selector: 'app-geolocation-card',
  templateUrl: './geolocation-card.component.html',
  styleUrls: [ './geolocation-card.component.scss' ]
} )
export class GeolocationCardComponent implements OnInit {

  zoom = 12

  options: google.maps.MapOptions = {
    mapTypeId: 'hybrid',
    zoomControl: false,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    maxZoom: 15,
    minZoom: 8,
  }

  center: any;
  constructor () { }

  ngOnInit (): void {
    navigator.geolocation.getCurrentPosition((position) => {
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      }
    })
  }

}
