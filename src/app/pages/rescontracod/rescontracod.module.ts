import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RescontracodPageRoutingModule } from './rescontracod-routing.module';

import { RescontracodPage } from './rescontracod.page';

import { ModuloModule } from 'src/app/modulo/modulo.module';
import { ModuloMaterialModule } from 'src/app/modulo/modulo-material/modulo-material.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RescontracodPageRoutingModule,
    ModuloModule,
    ModuloMaterialModule
  ],
  declarations: [RescontracodPage]
})
export class RescontracodPageModule {}
