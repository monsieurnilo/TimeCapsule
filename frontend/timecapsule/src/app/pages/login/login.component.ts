import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { emailRegex } from 'src/app/utils/email.utils';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private usersService: UsersService, private router: Router){
    this.loginForm = this.formBuilder.group({
      email:[null, [Validators.required, Validators.pattern(emailRegex)]],
      password:[null, [Validators.required]]
    })
  };

  public async login(){
    if(this.loginForm.dirty && this.loginForm.valid){
      try {
        const response = await this.usersService.login(this.loginForm.value);
        console.log(response)
        localStorage.setItem("token", response.token);
        this.router.navigate(["admin"])
      } catch (error) {
        console.log(error);
      }
    }
  }
}
