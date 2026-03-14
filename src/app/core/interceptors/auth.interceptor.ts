import { HttpInterceptorFn } from "@angular/common/http";
import { inject } from "@angular/core";
import { Auth } from "../services/auth";

export const authInterceptor: HttpInterceptorFn = (req, next)=>{
    const auth = inject(Auth);
    const token = auth.getToken();

    if(!token) return next(req);

    const authReq = req.clone({
        headers: req.headers.set('Authorization', `Bearer ${token}`)
    });
    return next(authReq);
}