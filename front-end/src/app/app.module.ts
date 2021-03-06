import { ModalModule } from 'ngx-bootstrap/modal';
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
import { GoogleMapsModule } from '@angular/google-maps';
import { RegisterUserComponent } from './screens/register-user/register-user.component';
import { SignupComponent } from './screens/signup/signup.component'
import { HttpClientModule } from '@angular/common/http';
import { PerdaFormComponent } from './screens/perda-form/perda-form.component';
import { EncontraFormComponent } from './screens/encontra-form/encontra-form.component';
import { ListarCasosComponent } from './screens/listar-casos/listar-casos.component';
import { FormsModule } from '@angular/forms';
import { CasoDetalhadoComponent } from './screens/caso-detalhado/caso-detalhado.component';
// import { AgmCoreModule } from '@agm/core';
@NgModule( {
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ProfileComponent,
    RegisterUserComponent,
    RegistrosCasosComponent,
    GeolocationCardComponent, SignupComponent, PerdaFormComponent, EncontraFormComponent, ListarCasosComponent, CasoDetalhadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgImageSliderModule,
    GoogleMapsModule,
    ModalModule.forRoot(),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
} )
export class AppModule { }
