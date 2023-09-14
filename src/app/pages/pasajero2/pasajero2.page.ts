import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pasajero2',
  templateUrl: './pasajero2.page.html',
  styleUrls: ['./pasajero2.page.scss'],
})
export class Pasajero2Page implements OnInit {

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
  pasajero4(){
    this.router.navigate(['/pasajero4'])
  }
}
