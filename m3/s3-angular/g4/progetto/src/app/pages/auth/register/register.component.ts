import { Component } from '@angular/core';

import { AuthService } from '../auth.service';
import { Register } from '../interfaces/register';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  constructor(
    private authSvc: AuthService
  ){

  }

  data:Register = {
    email: '',
    password: '',
    name: '',
    surname: ''
  };

  register(){
  }

}
