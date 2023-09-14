import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pasajero3',
  templateUrl: './pasajero3.page.html',
  styleUrls: ['./pasajero3.page.scss'],
})
export class Pasajero3Page implements OnInit {

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
  conductor(){
    this.router.navigate(['/conductor'])
  }
  pasajero4(){
    this.router.navigate(['/pasajero4'])
  }
  detalleviaje(){
    this.router.navigate(['/detalleviaje'])
  }
}
