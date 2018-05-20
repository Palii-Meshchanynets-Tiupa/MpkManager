import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert-dialog',
  template: `
    <span>
      {{ text }}
    </span>
  `,
  styles: [`
  `]
})
export class AlertDialogComponent implements OnInit {

  public text: string;

  constructor() { }

  ngOnInit() {
  }

}
