import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Users {

  url = 'http://localhost:8081/';
  constructor(private httpUsers: HttpClient){}

  getUsers(){
    return this.httpUsers.get(`${this.url}user/get`);
  }

  checkToken(){
    return this.httpUsers.get(this.url+"user/checkToken");
  }
  
}
