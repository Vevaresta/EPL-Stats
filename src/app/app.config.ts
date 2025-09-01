import { ApplicationConfig, inject, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter, Router, withNavigationErrorHandler } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes, withNavigationErrorHandler((error) => {
      
      const router = inject(Router);
      
      if (error) {
        console.error("Navigation error occurred:", error)
      }

      alert("Something went wrong while navigating.");

      router.navigate(["/error"])
    })),
    //add interceptors later
    provideHttpClient()
  ]
};
