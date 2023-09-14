import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistrodatosPageRoutingModule } from './registrodatos-routing.module';

import { RegistrodatosPage } from './registrodatos.page';
import { ModuloMaterialModule } from 'src/app/modulo/modulo-material/modulo-material.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistrodatosPageRoutingModule,
    ModuloMaterialModule
  ],
  declarations: [RegistrodatosPage]
})
export class RegistrodatosPageModule {}
