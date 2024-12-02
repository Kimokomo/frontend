import { ApplicationConfig } from '@angular/core';
import { provideHttpClient, withXsrfConfiguration } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(
      withXsrfConfiguration({
        cookieName: 'XSRF-TOKEN',  // Default XSRF cookie name
        headerName: 'X-XSRF-TOKEN',  // Header for XSRF token
      })
    ),
    provideRouter(routes)
  ],
};
