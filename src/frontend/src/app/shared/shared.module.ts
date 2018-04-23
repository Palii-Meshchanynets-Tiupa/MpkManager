import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './service/auth.service';
import { CustomInterceptor } from './service/custom.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AlertDialogComponent } from './dialog/alert-dialog.component';
import { AppMaterialModule } from '../app.material.module';
import { DataTableComponent } from './components/data-table/data-table.component';
import { CellComponent } from './components/data-table/cell.component';
import { TextCellComponent } from './components/data-table/cells/text-cell.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {ActionsCellComponent} from './components/data-table/cells/actions-cell.component';
import {ReactiveFormsModule} from '@angular/forms';
import { DynamicFormComponent } from './form-builder/dynamic-form-component/dynamic-form.component';
import { DynamicFormFieldComponent } from './form-builder/dynamic-form-component/dynamic-form-field/dynamic-form-field.component';
import '../../rxjs.imports';

@NgModule({
  imports: [
    CommonModule,
    AppMaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule
  ],
  exports: [
    CommonModule,
    AppMaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,

    DataTableComponent,
    PageHeaderComponent,
    DynamicFormComponent,
  ],
  declarations: [
    AlertDialogComponent,
    DataTableComponent,
    CellComponent,
    TextCellComponent,
    ActionsCellComponent,
    PageHeaderComponent,
    DynamicFormComponent,
    DynamicFormFieldComponent,
  ],
  entryComponents: [
    AlertDialogComponent,
    TextCellComponent,
    ActionsCellComponent,
    CellComponent,
  ],
  providers: [
    AuthService,
    { provide: HTTP_INTERCEPTORS, useClass: CustomInterceptor, multi: true }
  ]
})
export class SharedModule { }
