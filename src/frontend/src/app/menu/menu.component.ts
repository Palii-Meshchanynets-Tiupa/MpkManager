import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public items = [
    { name: 'Employees', link: '/emp' },
    { name: 'Map', link: '/map' },
    { name: 'Buses', link: '/bus' },
    { name: 'Bus Types', link: '/bus-type' },
    { name: 'Stop Types', link: '/bus-stop-type' },
    // { name: 'Drivers', link: '/driver' },
  ];

  constructor(protected router: Router) { }

  ngOnInit() {
  }

}
