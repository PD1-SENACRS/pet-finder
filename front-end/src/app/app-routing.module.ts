import { RegistrosCasosComponent } from './screens/registros-casos/registros-casos.component';
import { ProfileComponent } from './screens/profile/profile.component';
import { HomeComponent } from './screens/home/home.component';
import { LoginComponent } from './screens/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterUserComponent } from './screens/register-user/register-user.component';

const routes: Routes = [

  {
    path: '', component: LoginComponent

  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'profile', component: ProfileComponent
  },
  {
    path: 'registros-casos', component: RegistrosCasosComponent
  },
  {
    path: 'registrar-usuario', component: RegisterUserComponent
  }

];

@NgModule( {
  imports: [ RouterModule.forRoot( routes ) ],
  exports: [ RouterModule ]
} )
export class AppRoutingModule { }
