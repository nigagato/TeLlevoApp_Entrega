import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listadotrayectos',
  templateUrl: './listadotrayectos.page.html',
  styleUrls: ['./listadotrayectos.page.scss'],
})
export class ListadotrayectosPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  cuenta(){
    this.router.navigate(['/cuenta'])
  }
}
