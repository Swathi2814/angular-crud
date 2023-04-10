import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { UpdateEmployeeRoutingModule } from './update-employee-routing.module';
import { UpdateEmployeeComponent } from './update-employee.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    UpdateEmployeeRoutingModule,
    FormsModule
  ],
  declarations: [UpdateEmployeeComponent]
})
export class UpdateEmployeeModule { }

