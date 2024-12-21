import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient()

  ]
};

 export const baseUrl: string = 'http://127.0.0.1:5000/api/'
// export const baseUrl: string = 'http://www.arrendamiento.front.alfredowflsyopollo.us/api/'


