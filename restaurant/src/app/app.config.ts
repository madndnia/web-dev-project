import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { routes } from './app.routes';
import { jwtInterceptor } from './core/interceptors/jwt.interceptor';

export const appConfig = [
  provideRouter(routes),
  provideHttpClient(withInterceptors([jwtInterceptor])),
];
