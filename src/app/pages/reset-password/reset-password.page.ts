import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.page.html',
  styleUrls: ['./reset-password.page.scss'],
})
export class ResetPasswordPage implements OnInit {
email:any
  constructor(public route:Router, public authService:AuthenticationService) { }

  ngOnInit() {
  }
  async resetPassword(){
    this.authService.resetPassword(this.email).then(()=>{
    console.log('link enviado')
    this.route.navigate(['/login'])
    }
    
    ).catch((error)=>{
      console.log(error);
    })
  }

}
