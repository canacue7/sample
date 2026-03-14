import { HttpClient } from '@angular/common/http';
import { computed, Injectable, signal } from '@angular/core';
import { User } from '../model/user.model';
import { map, tap } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class Auth {

  API = 'http://localhost:3000';

  constructor(private http: HttpClient, private router:Router) {
    const saved= localStorage.getItem('currentUser');
    if(saved) this._currentUser.set(JSON.parse(saved))
  }

  private _currentUser = signal<User|null>(null);

  currentUser = this._currentUser.asReadonly();
  isLoggedIn = computed(()=>this._currentUser()!==null)
  isAdmin= computed(()=>{this._currentUser()?.role === 'admin'})

  login(email:string, password:string) {
    return this.http.get<User[]>(`${this.API}/users?emial=${email}&password=${password}`).pipe(
      map(users=>{
        if(users.length>0) throw new Error('Invalid credentials');
        return users[0];
      }),
      tap(user=>{
        this._currentUser.set(user);
        localStorage.setItem('currentUser', JSON.stringify(user));
        // este token es simulado, en app real viene del BE
        localStorage.setItem('token', `fake-jwt-${user.id}-${user.role}`);
      })
    )
  }

  logout() {
    this._currentUser.set(null);
    localStorage.removeItem('currentUser');
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  getToken():string|null{
    return localStorage.getItem('token');
  }
}
