import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PersonaPageRoutingModule } from './persona-routing.module';

import { PersonaPage } from './persona.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PersonaPageRoutingModule
  ],
  declarations: [PersonaPage]
})
export class PersonaPageModule {}
