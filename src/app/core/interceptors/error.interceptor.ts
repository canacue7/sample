import { inject } from '@angular/core';
import { Auth } from '../services/auth';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const auth = inject(Auth);
  const router = inject(Router);

  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      switch (error.status) {
        case 401:
          auth.logout();
          // router.navigate(['/login']);
          break;
        case 403:
          router.navigate(['/home']);
          break;
        case 500:
          console.log('Error de servidor, señor', error);
          break;
      }
      return throwError(() => error);
    }),
  );
};
