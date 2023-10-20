import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResetPasswordConfirmationPage } from './reset-password-confirmation.page';

const routes: Routes = [
  {
    path: '',
    component: ResetPasswordConfirmationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResetPasswordConfirmationPageRoutingModule {}
