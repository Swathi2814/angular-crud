import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateEmployeeRoutingModule } from './create-employee-routing.module';
import { CreateEmployeeComponent } from './create-employee.component';

@NgModule({
  imports: [
    CommonModule,
    CreateEmployeeRoutingModule,
  ],
  //declarations: [CreateEmployeeComponent]
})
export class CreateEmployeeModule { }
