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
    { name: 'Dolor sit amet', link: '/' },
    { name: 'Consectetur adipiscing elit', link: '/' },
    { name: 'Sed do eiusmod', link: '/' },
    { name: 'Tempor incididunt', link: '/' },
  ];

  constructor(protected router: Router) { }

  ngOnInit() {
  }

}
