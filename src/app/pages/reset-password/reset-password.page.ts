import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { HelperService } from 'src/app/services/helper.service ';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.page.html',
  styleUrls: ['./reset-password.page.scss'],
})
export class ResetPasswordPage implements OnInit {
  email: any;
  emailNotFound: boolean = false;

  constructor(
    public route: Router,
    public authService: AuthenticationService,
    public helperService: HelperService
  ) {}

  ngOnInit() {}

  async resetPassword() {

    this.emailNotFound = false;
    if (!this.email) {

      this.helperService.showAlert("Debes ingresar un email", "Error");
      return; 
    }

    this.authService
      .resetPassword(this.email)
      .then(() => {
        this.helperService.showToast("Mensaje enviado exitosamente");
        console.log('Link enviado');
        this.route.navigate(['/login']);
      })
      .catch((error) => {
        console.log(error);
        if (error.code === 'auth/user-not-found') {
          this.emailNotFound = true;
        } else {
          console.log(error);
        }
      });
  }
}
