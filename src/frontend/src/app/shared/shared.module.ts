import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './service/auth.service';
import { CustomInterceptor } from './service/custom.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AlertDialogComponent } from './dialog/alert-dialog.component';
import { AppMaterialModule } from '../app.material.module';
import { DataTableComponent } from './components/data-table/data-table.component';
import { CellComponent } from './components/data-table/cell.component';
import { TextCellComponent } from './components/text-cell.component';

@NgModule({
  imports: [
    CommonModule,
    AppMaterialModule,
  ],
  exports: [
    CommonModule,
    AppMaterialModule,
    DataTableComponent,
  ],
  declarations: [
    AlertDialogComponent,
    DataTableComponent,
    CellComponent,
    TextCellComponent,
  ],
  entryComponents: [
    AlertDialogComponent,
    TextCellComponent,
    CellComponent,
  ],
  providers: [
    AuthService,
    { provide: HTTP_INTERCEPTORS, useClass: CustomInterceptor, multi: true }
  ]
})
export class SharedModule { }
