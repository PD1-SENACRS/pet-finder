import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Caso } from '../perda-form/Caso';
import { CasoService } from '../perda-form/perda_form.service';

@Component( {
  selector: 'app-encontra-form',
  templateUrl: './encontra-form.component.html',
  styleUrls: [ './encontra-form.component.scss' ]
} )
export class EncontraFormComponent implements OnInit
{
  markers: any[] = [];
  caso: Caso = new Caso();
  message = "";
  isLoading = false;
  actionButton = "Register";
  latDoMapa: any
  lngDoMapa: any
  
  constructor ( private casoService: CasoService, private router: Router, ) { }
  contentString = ''
  options: google.maps.MapOptions = {
    mapTypeId: 'roadmap',
    zoomControl: false,
    scrollwheel: true,
    disableDoubleClickZoom: true,
    maxZoom: 22,
    minZoom: 8,
  }
  infoContent = '';
  zoom = 18
  center = {
    lat: -30.026736275902316,
    lng: -51.22842297420501
  };

  ngOnInit (): void
  {
    navigator.geolocation.getCurrentPosition( ( position ) =>
		{
			this.center = {
				lat: position.coords.latitude, //position.coords.latitude,
				lng: position.coords.longitude,  //position.coords.longitude,
				

			}
		} )
    this.caso.status = 'Encontrado'

  }
  save ()
  {
    this.isLoading = true;
    // this.casoService.getFotoDeGato().subscribe(
    //   ( value ) =>
    //   {
    //     this.caso.imagem = value
        
    //   }
    // )
    this.caso.status = 'Encontrado'
    this.casoService.Insert( this.caso ).subscribe( caso =>
    {
      this.caso = caso;
      this.message = `${ caso.nome_animal } registered!`;
      this.caso = new Caso();
      this.isLoading = false
      this.router.navigate( [ '/' ] );
      
    } )
  }

  addMarker ( clat: any, clng: any )
  {
    this.markers.push( {
      position: {
        lat: clat,
        lng: clng,
      },
      icon: {
        url: '../../../assets/images/petMarkerGeneric.png',
        scaledSize: {
          height: 60,
          width: 60
        }
      },
      info: "doguito",
      label: {
        color: 'Black',
        text: 'Doggo Perdidasso',
      },
      title: 'C??ozinho Perdido' + ( this.markers.length + 1 ),

      options: {
        animation: google.maps.Animation.BOUNCE,
        draggable: true,
      },

    } )

  }

  pegaMarcadorDoMouseClick ( event: google.maps.MapMouseEvent )
  {
    this.markers = []
    this.addMarker( event.latLng!.lat(), event.latLng!.lng() )
    this.caso.latitude = event.latLng!.lat(),
      this.caso.longitude = event.latLng!.lng()

  }

  setTipoAnimal ( value: any )
  {
    this.caso.tipo_animal = value.target.value
  }
}
