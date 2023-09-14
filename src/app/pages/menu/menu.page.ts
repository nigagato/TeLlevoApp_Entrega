import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  arreglo= [];
  arr=new Array();
  usuario:string='';
  constructor(private router: Router) { }

  ngOnInit() {
    var data = localStorage.getItem('usuario');
    
    if(data!=null){
      console.log("no es nulo");
      this.arreglo=JSON.parse(data);
      console.log(this.arreglo);
      this.arr.push(this.arreglo);
      this.arr.forEach(element => {
        console.log(element.usuario);
        this.usuario=element.usuario;
      });
    }

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
  conductor(){
    this.router.navigate(['/conductor'])
  }
  direccion(){
    this.router.navigate(['/direccion'])
  }
}
