import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthService} from './service/auth.service';
import {CustomInterceptor} from './service/custom.interceptor';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {AlertDialogComponent} from './dialog/alert-dialog.component';
import {AppMaterialModule} from '../app.material.module';
import {DataTableComponent} from './data-table/data-table.component';
import {CellComponent} from './data-table/cell.component';
import {TextCellComponent} from './data-table/cells/text-cell.component';
import {PageHeaderComponent} from './page-header/page-header.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {ActionsCellComponent} from './data-table/cells/actions-cell.component';
import {ReactiveFormsModule} from '@angular/forms';
import {DynamicFormComponent} from './dynamic-form/dynamic-form-component/dynamic-form.component';
import {DynamicFormFieldComponent} from './dynamic-form/dynamic-form-component/dynamic-form-field/dynamic-form-field.component';
import {MatMomentDateModule} from '@angular/material-moment-adapter';
import {MAT_DATE_LOCALE} from '@angular/material';
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
    MatMomentDateModule,
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
    {provide: HTTP_INTERCEPTORS, useClass: CustomInterceptor, multi: true},
    {provide: MAT_DATE_LOCALE, useValue: 'en-GB'},
  ]
})
export class SharedModule { }
