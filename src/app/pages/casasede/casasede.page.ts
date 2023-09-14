import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-casasede',
  templateUrl: './casasede.page.html',
  styleUrls: ['./casasede.page.scss'],
})
export class CasasedePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  configuracion(){
    this.router.navigate(['/configuracion'])
  }
}
