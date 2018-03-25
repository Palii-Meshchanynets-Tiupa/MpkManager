import { Component, ComponentFactoryResolver, Input, OnInit, Type, ViewChild, ViewContainerRef } from '@angular/core';
import { CellDef } from './data-table.component';

@Component({
  selector: 'app-cell',
  template: `<ng-template #cellTemplate></ng-template>`,
  styles: [``]
})
export class CellComponent implements OnInit {

  @ViewChild('cellTemplate', { read: ViewContainerRef }) cellContainerRef;

  @Input() cellDef: Type<CellDef>;
  @Input() prop: any;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {
  }

  ngOnInit() {
    const factory = this.componentFactoryResolver.resolveComponentFactory(this.cellDef);

    const component = this.cellContainerRef.createComponent(factory);
    (<CellDef>component.instance).prop = this.prop;
  }

}
