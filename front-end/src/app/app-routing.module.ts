import { EncontraFormComponent } from './screens/encontra-form/encontra-form.component';
import { PerdaFormComponent } from './screens/perda-form/perda-form.component';
import { RegistrosCasosComponent } from './screens/registros-casos/registros-casos.component';
import { ProfileComponent } from './screens/profile/profile.component';
import { HomeComponent } from './screens/home/home.component';
import { LoginComponent } from './screens/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: 'casos', component: RegistrosCasosComponent
  },
  {
    path: '', component: HomeComponent
  },
  {
    path: 'perda-form', component: PerdaFormComponent
  },
  {
    path: 'encontra-form', component: EncontraFormComponent
  },
  {
    path: 'profile', component: ProfileComponent
  },
  {
    path: 'registros-casos', component: RegistrosCasosComponent,

  },

];

@NgModule( {
  imports: [ RouterModule.forRoot( routes ) ],
  exports: [ RouterModule ]
} )
export class AppRoutingModule { }
