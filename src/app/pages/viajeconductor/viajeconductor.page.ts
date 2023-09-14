import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viajeconductor',
  templateUrl: './viajeconductor.page.html',
  styleUrls: ['./viajeconductor.page.scss'],
})
export class ViajeconductorPage implements OnInit {

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
  viajecancelado(){
    this.router.navigate(['/viajecancelado'])
  }
}
