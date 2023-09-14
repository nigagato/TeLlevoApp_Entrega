import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrarvehiculo',
  templateUrl: './registrarvehiculo.page.html',
  styleUrls: ['./registrarvehiculo.page.scss'],
})
export class RegistrarvehiculoPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  servicios(){
    this.router.navigate(['/servicios'])
  }
  conductor(){
    this.router.navigate(['/conductor'])
  }    
}
