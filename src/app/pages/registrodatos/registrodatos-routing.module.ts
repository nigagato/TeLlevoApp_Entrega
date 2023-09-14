import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistrodatosPage } from './registrodatos.page';
import { ModuloMaterialModule } from 'src/app/modulo/modulo-material/modulo-material.module';

const routes: Routes = [
  {
    path: '',
    component: RegistrodatosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistrodatosPageRoutingModule {}
