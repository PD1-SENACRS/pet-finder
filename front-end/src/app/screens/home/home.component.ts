import { Component, NgZone, OnInit, ViewChild } from '@angular/core';
import { GoogleMap, MapInfoWindow, MapMarker } from '@angular/google-maps';
import { BsModalService } from 'ngx-bootstrap/modal';

@Component( {
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: [ './home.component.scss' ]
} )
export class HomeComponent implements OnInit {
	constructor ( bsModalService: BsModalService ) {

	}


	@ViewChild( GoogleMap, { static: false } ) map: GoogleMap | any
	@ViewChild( MapInfoWindow ) infoWindow!: MapInfoWindow;
	options: google.maps.MapOptions = {
		mapTypeId: 'roadmap',
		zoomControl: false,
		scrollwheel: false,
		disableDoubleClickZoom: true,
		maxZoom: 22,
		minZoom: 8,
	}


	markers: any[] = [
		{
			
			position: {
				lat: -30.026274150043346,
				lng: -51.22979358301162,
			},
			info: "ksksks",
			label: {
				color: 'Black',
				text: 'rs',
			},
			title: 'Cãozinho Perdido',
			options: {
				animation: google.maps.Animation.BOUNCE,
				// icon: '../../../assets/images/coelho.jpg'
			},
		},
		{
			position: {
				lat: -30.025823633313102,
				lng: -51.227953587627404,
			},
			info: "doguito",
			label: {
				color: 'Black',
				text: 'gatito',
			},
			title: 'Cãozinho Perdido',
			options: {
				animation: google.maps.Animation.BOUNCE,
				icon: this.createIconWithPhoto('../../../assets/images/cachorro.jpg')
			},
		},
		{
			position: {
				lat: -30.02603263617451,
				lng: -51.22881189451217,
			},
			info: "dogers",
			label: {
				color: 'Black',
				text: 'Doggo Perdidasso',
			},
			title: 'Cãozinho Perdido',
			options: {
				animation: google.maps.Animation.BOUNCE,
				//icon: '../../../assets/images/dog.jpg'
			},
		}

	];
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

		// this.addMarker( -30.026736275902316, -51.22842297420501 )

	}

	createIconWithPhoto (picture: any) {

		var canvas = document.createElement( "canvas" );
		canvas.width = 40;
		canvas.height = 50;
		var context = canvas.getContext( "2d" );
		context!.fillStyle = "rgb(193,101,214)";
		context!.beginPath();

		context!.moveTo( 0, 0 );
		context!.lineTo( 40, 0 );
		context!.lineTo( 40, 40 );
		context!.lineTo( 25, 40 );
		context!.lineTo( 20, 50 );
		context!.lineTo( 15, 40 );
		context!.lineTo( 0, 40 );
		context!.fill();

		var img = new Image();
		img.src = picture;
		context!.drawImage( img, 2, 2, 36, 36 );
		return canvas.toDataURL();
	}





	pegaMarcadorDoMouseClick ( event: google.maps.MapMouseEvent ) {

		console.log( event.latLng?.lat(), event.latLng?.lng() )
		// this.addMarker(  )

	}

	teste () {
		console.log( this.markers )
	}

	addMarker () {
		this.markers.push( {
			position: {
				lat: -30.02603263617451,
				lng: -51.22881189451217,
			},
			info: "doguito",
			label: {
				color: 'Black',
				text: 'Doggo Perdidasso',
			},
			title: 'Cãozinho Perdido' + ( this.markers.length + 1 ),

			options: {
				animation: google.maps.Animation.BOUNCE,

			},

		} )
	}

	openInfo ( marker: MapMarker | HTMLElement, content: any ) {
		this.infoContent = content
		this.infoWindow.open()
		console.log( 'teste' )

	}

	openInfoWindow ( marker: MapMarker ) {
		this.infoWindow.open( marker );
	}




}


