import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  usuario:string='';
  password:string='';

  constructor(private router: Router) { }

  ngOnInit() {
  }
  menu(){
    const data={
      'usuario':this.usuario,
      'pass':this.password
    };
    localStorage.setItem('usuario', JSON.stringify(data));
    this.router.navigate(['/menu'])
    
  }
  registro(){
    this.router.navigate(['/registro'])
  }
  rescontracod(){
    this.router.navigate(['/rescontracod'])
  }
}
