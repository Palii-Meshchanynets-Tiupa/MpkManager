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
    { name: 'Routes', link: '/' },
    { name: 'Stops', link: '/' },
    { name: 'Driving schedule', link: '/' },
    { name: 'Cars', link: '/' },
    { name: 'Drivers', link: '/' },
  ];

  constructor(protected router: Router) { }

  ngOnInit() {
  }

}
