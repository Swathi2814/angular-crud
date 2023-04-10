import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeListRoutingModule } from './employee-list-routing.module';
import { EmployeeListComponent } from './employee-list.component';


@NgModule({
  imports: [
    CommonModule,
    EmployeeListRoutingModule,
  ],
  declarations: [EmployeeListComponent]
})
export class EmployeeListModule { }
