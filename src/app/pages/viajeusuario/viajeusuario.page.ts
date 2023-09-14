import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viajeusuario',
  templateUrl: './viajeusuario.page.html',
  styleUrls: ['./viajeusuario.page.scss'],
})
export class ViajeusuarioPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  menu(){
    this.router.navigate(['/menu'])
  }
  cuenta(){
    this.router.navigate(['/cuenta'])
  }
  servicios(){
    this.router.navigate(['/servicios'])
  }
  pasajero1(){
    this.router.navigate(['/pasajero1'])
  }
  viajecancelado(){
    this.router.navigate(['/viajecancelado'])
  }
}
