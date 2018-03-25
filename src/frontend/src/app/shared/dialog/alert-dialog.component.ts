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

  private text: string;

  constructor() { }

  ngOnInit() {
  }

}
