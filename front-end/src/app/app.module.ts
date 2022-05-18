import { GeolocationCardComponent } from './screens/registros-casos/cards/geolocation-card/geolocation-card.component';
import { RegistrosCasosComponent } from './screens/registros-casos/registros-casos.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './screens/login/login.component';
import { HomeComponent } from './screens/home/home.component';
import { ProfileComponent } from './screens/profile/profile.component';
import { NgImageSliderModule } from 'ng-image-slider';
import { GoogleMapsModule } from '@angular/google-maps'


// import { AgmCoreModule } from '@agm/core';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ProfileComponent,
    RegistrosCasosComponent, 
    GeolocationCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgImageSliderModule,
    GoogleMapsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
