import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Role } from '../models/user.model';
import { AuthService } from '../services/auth.service';

export const roleGuard: CanActivateFn = (route) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  const allowedRoles = route.data?.['roles'] as Role[] | undefined;

  if (!allowedRoles || allowedRoles.length === 0) {
    return true;
  }

  return authService.hasRole(allowedRoles) ? true : router.createUrlTree(['/unauthorized']);
};

