import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrodatos',
  templateUrl: './registrodatos.page.html',
  styleUrls: ['./registrodatos.page.scss'],
})
export class RegistrodatosPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  registrocompleto(){
    this.router.navigate(['/registrocompleto'])
  }
  registro(){
    this.router.navigate(['/registro'])
  }
}
