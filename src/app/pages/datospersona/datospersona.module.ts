import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DatospersonaPageRoutingModule } from './datospersona-routing.module';

import { DatospersonaPage } from './datospersona.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DatospersonaPageRoutingModule
  ],
  declarations: [DatospersonaPage]
})
export class DatospersonaPageModule {}
