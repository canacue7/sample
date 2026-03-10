import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path:'home', loadComponent:()=>import('./features/home/home').then(m=>m.Home)},
    {path:'login', loadComponent:()=>import('./features/login/login').then(m=>m.Login)}
];
