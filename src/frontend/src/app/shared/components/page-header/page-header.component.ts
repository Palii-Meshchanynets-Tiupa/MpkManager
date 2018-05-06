import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Entity} from '../../entity';

export interface HeaderItem {
  position: 'left' | 'right' ;
  icon: string;
  evenHandler: () => void;
}

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.css']
})
export class PageHeaderComponent implements OnInit {

  @Input('items') items: Array<HeaderItem> ;

  constructor() { }

  ngOnInit() {
  }

  getLeftItems(): Array<HeaderItem> {
    return this.items.filter(item => item.position === 'left');
  }

  getRightItems(): Array<HeaderItem> {
    return this.items.filter(item => item.position === 'right');
  }
}
