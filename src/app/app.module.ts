import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MainComponent } from './components/main/main.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ReservarComponent } from './components/reservar/reservar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { RouterModule } from '@angular/router';
import { NavUnloggedComponent } from './components/main/mainComponents/NavUnlogged/NavUnlogged.component';
import { HeroComponent } from './components/main/mainComponents/Hero/Hero.component';
import { PromocionComponent } from './components/main/mainComponents/Promocion/Promocion.component';
import { HotelsUnloggedComponent } from './components/main/mainComponents/HotelsUnlogged/HotelsUnlogged.component.';
import { FooterUnloggedComponent } from './components/main/mainComponents/FooterUnlogged/FooterUnlogged.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    RegisterComponent,
    LoginComponent,
    DashboardComponent,
    ReservarComponent,
    NavUnloggedComponent,
    HeroComponent,
    PromocionComponent,
    HotelsUnloggedComponent,
    FooterUnloggedComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    RouterModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth())
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

})
export class AppModule { }  