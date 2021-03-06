import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {NgModule} from '@angular/core';
import {MenuComponent} from './menu/menu.component';

const routes: Routes = [
  {path: '', component: MenuComponent},
  {path: 'login', component: LoginComponent},
  {path: 'emp', loadChildren: './modules/employee/employee.module#EmployeeModule'},
  {path: 'bus', loadChildren: './modules/bus/bus.module#BusModule'},
  {path: 'bus-type', loadChildren: './modules/bus-type/bus-type.module#BusTypeModule'},
  {path: 'bus-stop-type', loadChildren: './modules/bus-stop-type/bus-stop-type.module#BusStopTypeModule'},
  {path: 'map', loadChildren: './modules/map/map.module#MapModule'},
  {path: '**', redirectTo: '/'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {enableTracing: false})
  ],
  exports: [
    RouterModule
  ]
})
export class AppRouting {
}
