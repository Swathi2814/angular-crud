import { Routes, RouterModule } from '@angular/router';
import { EmployeeDetailsComponent } from './employee-details.component';
import { NgModule } from '@angular/core';



const routes: Routes = [
  {
    path: '',
    component: EmployeeDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeDetailsRoutingModule { }
