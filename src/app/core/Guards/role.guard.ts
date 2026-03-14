import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";
import { Auth } from "../services/auth";


export const roleGuard: CanActivateFn = (route, state) =>{
    const auth = inject(Auth);
    const router = inject(Router);

    const requiredRole = route.data['role'] as string;
    const user = auth.currentUser();

    if(user?.role === requiredRole) {
        return true;
    }

    if(!user) return router.createUrlTree(['/login']);
    return router.createUrlTree(['/home']);
}