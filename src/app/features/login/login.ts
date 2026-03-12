import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Users } from '../../core/services/users';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  fg: FormGroup;

  constructor(private fb: FormBuilder, private users: Users) {
    this.fg = this.fb.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {
    // if(this.fg.valid){
    //   console.log(this.fg.value);
    // }else{
    //   console.log('Form is invalid');
    // }
    console.log('submit');
    this.users.getUsers().subscribe(
      {
      next: (data) => console.log('users', data),
      error: (err) => console.error('Error fetching users', err)
    }
    // data=>{
    //   console.log('users', data);
    // }
  );
    if (this.fg.valid) {
      console.log('todo', this.fg);
      console.log('con get', this.fg.get('username'));
      console.log('con value', this.fg.value);
    } else {
      console.log('Form is invalid');
      this.fg.markAllAsTouched();
      return;
    }
  }

  get username() {
    return this.fg.get('username');
  }
  get password() {
    return this.fg.get('password');
  }
}
