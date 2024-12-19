import {ApplicationConfig, importProvidersFrom} from '@angular/core';
import {provideRouter, RouterModule} from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import {provideHttpClient, withFetch} from "@angular/common/http";
import {provideAnimationsAsync} from "@angular/platform-browser/animations/async";
import {ReactiveFormsModule} from "@angular/forms";
import {IonicModule} from "@ionic/angular";

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),
    provideRouter(routes),
    provideClientHydration(),
    RouterModule,
    IonicModule,
    importProvidersFrom(ReactiveFormsModule),
    provideAnimationsAsync(),
    provideHttpClient(withFetch()),
    provideClientHydration()]
};
