import { Component, ComponentFactoryResolver, Input, OnInit, Type, ViewChild, ViewContainerRef } from '@angular/core';
import { CellDataHolder } from './data-table.component';

@Component({
  selector: 'app-cell',
  template: `<ng-template #cellTemplate></ng-template>`,
  styles: [``]
})
export class CellComponent implements OnInit {

  @ViewChild('cellTemplate', { read: ViewContainerRef }) cellContainerRef;

  @Input() cellType: Type<CellDataHolder>;
  @Input() props: any;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {
  }

  ngOnInit() {
    const factory = this.componentFactoryResolver.resolveComponentFactory(this.cellType);

    const component = this.cellContainerRef.createComponent(factory);
    Object.assign(<CellDataHolder>component.instance, this.props);
  }

}
