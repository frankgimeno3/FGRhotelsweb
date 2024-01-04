import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"fgrhoteles-dc7d8","appId":"1:568333057293:web:a93dbbd0d92b2eedf74444","storageBucket":"fgrhoteles-dc7d8.appspot.com","apiKey":"AIzaSyD_-8ly4hRMLwFkBy2cLSzU6B6LLnzp6_s","authDomain":"fgrhoteles-dc7d8.firebaseapp.com","messagingSenderId":"568333057293"}))), importProvidersFrom(provideAuth(() => getAuth()))]
};
