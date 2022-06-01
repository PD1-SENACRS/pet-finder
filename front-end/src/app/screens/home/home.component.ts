import { Component, OnInit, ViewChild } from '@angular/core';
import { GoogleMap, MapInfoWindow, MapMarker } from '@angular/google-maps';
import { BsModalService } from 'ngx-bootstrap/modal';

@Component( {
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: [ './home.component.scss' ]
} )
export class HomeComponent implements OnInit {

	constructor (bsModalService: BsModalService) { }

	@ViewChild( GoogleMap, { static: false } ) map: GoogleMap | any
	@ViewChild( MapInfoWindow, { static: false } ) info: MapInfoWindow | any
	options: google.maps.MapOptions = {
		mapTypeId: 'roadmap',
		zoomControl: false,
		scrollwheel: false,
		disableDoubleClickZoom: true,
		maxZoom: 22,
		minZoom: 8,
	}


	markers: any[] = [];
	infoContent = '';
	zoom = 18

	center: any;

	ngOnInit (): void {
		navigator.geolocation.getCurrentPosition( ( position ) => {
			this.center = {
				lat: -30.026736275902316, //position.coords.latitude,
				lng: -51.22842297420501,  //position.coords.longitude,
				zoom: this.zoom,
				
			}
		} )

		this.addMarker( -30.026736275902316, -51.22842297420501 )

	}

	pegaMarcadorDoMouseClick ( event: google.maps.MapMouseEvent ) {
		
		console.log( event.latLng?.lat() )
		this.addMarker( event.latLng?.lat(), event.latLng?.lng() )

	}
	addMarker ( latitudeDoClick: any, LongitudeDoClique: any ) {
		this.markers.push( {
			position: {
				lat: latitudeDoClick,
				lng: LongitudeDoClique,
			},
			
			label: {
				color: 'Black',
				text: 'Doggo Perdidasso',
			},
			title: 'Cãozinho Perdido' + ( this.markers.length + 1 ),
			info: 'Marker info ' + ( this.markers.length + 1 ),
			options: {
				animation: google.maps.Animation.BOUNCE,
			},
		} )
	}

	openInfo ( marker: MapMarker | any, content: any ) {
		this.infoContent = content
		this.info.open()
		
	}
}


