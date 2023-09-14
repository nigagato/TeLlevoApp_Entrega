import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pasajero2PageRoutingModule } from './pasajero2-routing.module';

import { Pasajero2Page } from './pasajero2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pasajero2PageRoutingModule
  ],
  declarations: [Pasajero2Page]
})
export class Pasajero2PageModule {}
