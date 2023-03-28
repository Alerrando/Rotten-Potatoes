import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthComponent } from '../services/auth/auth.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username = "";
  password = "";
  errorMsg = "";
  private auth: AuthComponent = new AuthComponent;
  constructor(private router: Router) {  }
  
  
  login(){
    if(this.username.trim().length === 0){
      this.errorMsg = "Username is required";
    }

    else if(this.password.trim().length === 0){
      this.errorMsg = "Password is required";
    }
    else{
      this.errorMsg = "";
      let res = this.auth.login(this.username, this.password);

      if(res == 200){
        this.router.navigate(['/home']);
      }
      else{
        this.errorMsg = "Invalid Credentials";
      }
    }
  }
}
