import { Component, NgZone, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PluginListenerHandle } from '@capacitor/core';
import { Network } from '@capacitor/network';
import { AlertController, LoadingController } from '@ionic/angular';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { HelperService } from 'src/app/services/helper.service ';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit, OnDestroy {

  networkListener: PluginListenerHandle;
  status:boolean;
  loginForm: FormGroup;
  showPassword = false;
  passwordToggleIcon = 'eye';

  constructor(
    public route: Router,
    public formBuilder: FormBuilder,
    public loadingCtrl: LoadingController,
    public authService: AuthenticationService,
    public helperService: HelperService,
    public alertService: AlertController,
    public ngZone: NgZone
  ) {}

  async ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.pattern("[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"),
        ],
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.pattern("^(?=.*[A-Z0-9])(?=.*[0-9])(?=.*[A-Z]).{8,}$"),
        ],
      ],
      
    });
    this.networkListener = await Network.addListener('networkStatusChange', status => {
      console.log('Network status changed', status);
      this.ngZone.run(() =>{
        this.changeStatus(status)
      });
    });
    const status = await Network.getStatus();
    console.log('Network status',status);
  
    this.changeStatus(status);
    console.log('Network status',this.status);
    
  }
  changeStatus(status){
    this.status = status?.connected;
  }

  ngOnDestroy(): void {
    if(this.networkListener) this.networkListener.remove();
    
  }

  

  get errorControl() {
    return this.loginForm?.controls;
  }

  async login() {
    const loading = await this.helperService.showLoading("Cargando...");

    if (this.loginForm.value.email == "") {
      await loading.dismiss();
      await this.helperService.showAlert("Debe ingresar un email", "Error");
      return;
    }
    if (this.loginForm.value.password == " ") {
      loading.dismiss();
      this.helperService.showAlert("Debe ingresar una contraseña", "Error");
      return;
    }
    if (this.loginForm?.valid) {
      const user = await this.authService
        .loginUser(this.loginForm.value.email, this.loginForm.value.password)
        .catch(async (error) => {
          console.log(error);
          loading.dismiss();
        });

      if (user) {
        // Guardar datos de inicio de sesión en Local Storage
        localStorage.setItem('userEmail', this.loginForm.value.email);
        localStorage.setItem('userPassword', this.loginForm.value.password);

        loading.dismiss();
        this.route.navigate(['/home']);
      } else {
        console.log('Provide correct credentials');
      }
    }
  }

  togglePassword(): void {
    this.showPassword = !this.showPassword;

    if (this.passwordToggleIcon == 'eye') {
      this.passwordToggleIcon = 'eye-off';
    } else {
      this.passwordToggleIcon = 'eye';
    }
  }
}

