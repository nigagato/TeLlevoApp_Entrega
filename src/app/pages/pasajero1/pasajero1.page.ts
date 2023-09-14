import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pasajero1',
  templateUrl: './pasajero1.page.html',
  styleUrls: ['./pasajero1.page.scss'],
})
export class Pasajero1Page implements OnInit {

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
  pasajero2(){
    this.router.navigate(['/pasajero2'])
  }
  viajeusuario(){
    this.router.navigate(['/viajeusuario'])
  }
}
