import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListadotrayectosPageRoutingModule } from './listadotrayectos-routing.module';

import { ListadotrayectosPage } from './listadotrayectos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListadotrayectosPageRoutingModule
  ],
  declarations: [ListadotrayectosPage]
})
export class ListadotrayectosPageModule {}
