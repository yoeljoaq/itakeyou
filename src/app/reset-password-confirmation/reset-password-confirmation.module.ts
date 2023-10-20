import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResetPasswordConfirmationPageRoutingModule } from './reset-password-confirmation-routing.module';

import { ResetPasswordConfirmationPage } from './reset-password-confirmation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResetPasswordConfirmationPageRoutingModule
  ],
  declarations: [ResetPasswordConfirmationPage]
})
export class ResetPasswordConfirmationPageModule {}
