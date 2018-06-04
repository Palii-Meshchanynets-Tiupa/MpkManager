import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public items = [
    { name: 'main.employees', link: '/emp' },
    { name: 'main.map', link: '/map' },
    { name: 'main.buses', link: '/bus' },
    { name: 'main.busTypes', link: '/bus-type' },
    { name: 'main.stopTypes', link: '/bus-stop-type' },
    // { name: 'main.drivers', link: '/driver' },
  ];

  constructor(protected router: Router) { }

  ngOnInit() {
  }

}
