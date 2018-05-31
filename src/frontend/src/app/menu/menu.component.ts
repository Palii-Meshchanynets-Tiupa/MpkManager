import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public items = [
    { name: 'EMPLOYEES', link: '/emp' },
    { name: 'MAP', link: '/map' },
    { name: 'BUSES', link: '/bus' },
    { name: 'BUS_TYPES', link: '/bus-type' },
    { name: 'STOP_TYPES', link: '/bus-stop-type' },
    // { name: 'DRIVERS', link: '/driver' },
  ];

  constructor(protected router: Router) { }

  ngOnInit() {
  }

}
