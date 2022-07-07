import { ICaso } from './../registros-casos/models/ICaso';
import { RetCasos } from './../registros-casos/models/RetCaso';
import { HomeService } from './home.service';
import { Component, NgZone, OnInit, ViewChild } from '@angular/core';
import { GoogleMap, MapInfoWindow, MapMarker } from '@angular/google-maps';
import { BsModalService } from 'ngx-bootstrap/modal';
import { Observable, of } from 'rxjs';

@Component( {
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: [ './home.component.scss' ]
} )
export class HomeComponent implements OnInit
{
	constructor ( bsModalService: BsModalService,
		private homeService: HomeService )
	{

	}
	googleInstance: google.maps.LatLng = new google.maps.LatLng( -34, 151 );
	@ViewChild( GoogleMap, { static: false } ) map: GoogleMap | any
	@ViewChild( MapInfoWindow ) infoWindow!: MapInfoWindow | any;

	contentString = ''
	options: google.maps.MapOptions = {
		mapTypeId: 'roadmap',
		zoomControl: true,
		scrollwheel: true,
		disableDoubleClickZoom: true,
		maxZoom: 22,
		minZoom: 8,
		
	}
	listaCasos: ICaso[] = [];

	setaPosition ( lat: any, lng: any )
	{

	}

	markers: any[] = [
		// {
		// 	//TODO FAZER UM FOR EACH NA LISTA DO GETMARKERS PARA ESSA LISTA AQUI
		// 	position: {
		// 		lat: -30.026274150043346,
		// 		lng: -51.22979358301162,
		// 	},
		// 	info: "ksksks",
		// 	label: {
		// 		color: 'Black',
		// 		text: 'rs',
		// 	},
		// 	title: 'Cãozinho Perdido',
		// 	options: {
		// 		animation: google.maps.Animation.BOUNCE,
		// 		icon: '../../../assets/images/coelho.jpg'
		// 	},
		// },
		// {
		// 	position: {
		// 		lat: -30.025823633313102,
		// 		lng: -51.227953587627404,
		// 	},
		// 	info: "doguito",

		// 	title: "title",
		// 	options: {
		// 		animation: google.maps.Animation.BOUNCE,
		// 		icon: this.createIconWithPhoto( '../../../assets/images/coelho.jpg' )
		// 	},
		// },
		// {
		// 	position: {
		// 		lat: -30.02603263617451,
		// 		lng: -51.22881189451217,
		// 	},
		// 	info: "dogers",
		// 	label: {
		// 		color: 'Black',
		// 		text: 'Doggo Perdidasso',
		// 	},
		// 	title: '../../../assets/images/cachorro.jpg',
		// 	options: {
		// 		animation: google.maps.Animation.BOUNCE,
		// 		icon: this.createIconWithPhoto( '../../../assets/images/cachorro.jpg' )
		// 	},
		// }

	];
	infoContentName = '';
	infoContentRaca: string = ''
	infoContentStatus: string = ''
	infoContentImage: string =''
	zoom = 18
	center: any;

	ngOnInit (): void
	{
		navigator.geolocation.getCurrentPosition( ( position ) =>
		{
			this.center = {
				lat: position.coords.latitude, //position.coords.latitude,
				lng: position.coords.longitude,  //position.coords.longitude,
				zoom: this.zoom,

			}
		} )
		this.getListaMarcadores()
	}

	verificaTipoPin ( caso: ICaso ): string
	{
		if ( caso.status == 'Encontrado' )
		{
			let pin = ''
			switch ( caso.tipo_animal )
			{
				case 'gato':
					pin = '../../../assets/images/pinCatFound.png'
					break;
				case 'cachorro':
					pin = '../../../assets/images/pinDogFound.png'
					break;
			}
			return pin
		} else
		{
			let pin = ''
			switch ( caso.tipo_animal )
			{
				case 'gato':
					pin = '../../../assets/images/pinCatLost.png'
					break;
				case 'cachorro':
					pin = '../../../assets/images/pinDogLost.png'
					break;
			}
			return pin
		}
	}

	setListaMarkers ( listaToMarkers: ICaso[] )
	{
		listaToMarkers.forEach( element =>
		{
			this.markers.push( {
				position: {
					lat: element.latitude,
					lng: element.longitude
				},
				info: element.status,
				label: {
					color: 'black',
					text: element.raca
				},
				title: element.nome_animal,
				options: {
					animation: google.maps.Animation.BOUNCE,
					icon: this.verificaTipoPin(element),
				},
				png: element.imagem
			} )



		} );

	}

	createIconWithPhoto ( picture: any )
	{
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

	pegaMarcadorDoMouseClick ( event: google.maps.MapMouseEvent )
	{
	}

	teste ( opa: any )
	{
	}

	openInfoWindow ( marker: MapMarker, marke: any )
	{ 
		//TODO fazer a foto vir pra ca

		
		this.infoWindow.infoWindow.gm_bindings_.maxWidth = 300;
		this.infoWindow.infoWindow.gm_bindings_.minWidth = 150

		this.infoContentName = marke.title
		this.infoContentRaca = marke.label.text
		this.infoContentStatus = marke.info
		this.infoContentImage = marke.png
		this.infoWindow.open( marker );
	}

	getListaMarcadores ()
	{
		this.homeService.getListaMarcadores().subscribe(
			( value ) =>
			{
				this.listaCasos = value
				this.setListaMarkers( this.listaCasos )
			}


		)

	}




}


