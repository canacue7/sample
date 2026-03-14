import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";
import { Auth } from "../services/auth";

export const authGuard: CanActivateFn = (route, state) =>{
    const auth = inject(Auth);
    const router = inject(Router);

    if(auth.isLoggedIn()) {
        return true;
    }
    console.log('User not authenticated, redirecting to login', route);

    return router.createUrlTree(['/login'], {
        queryParams: {
            returnUrl: state.url    
        }
    });
}