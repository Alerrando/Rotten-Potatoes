import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
  constructor (private router: Router) {  }

  login(uname: string, pword: string) {
    if (uname == 'Alerrando' && pword == '1234') {
      return 200;
    }

    return 403;
  }

  
  logout(){
    this.router.navigate(['/login'])
  }
}
