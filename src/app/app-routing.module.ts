// import { NgModule } from '@angular/core';
// import { Routes, RouterModule } from '@angular/router';
// import { EmployeeListComponent } from './employee-list/employee-list.component';
// import { CreateEmployeeComponent } from './create-employee/create-employee.component';
// import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
// import { EmployeeDetailsComponent } from './employee-details/employee-details.component';

// const routes: Routes = [
//   {path: 'employees', component: EmployeeListComponent},
//   {path: 'create-employee', component: CreateEmployeeComponent},
//   {path: '', redirectTo: 'employees', pathMatch: 'full'},
//   {path: 'update-employee/:id', component: UpdateEmployeeComponent},
//   {path: 'employee-details/:id', component: EmployeeDetailsComponent}
// ];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],                                                                                                                                                                                                                                                                                                          
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  // {
  //   path:'employees',

  // children:[
  {
    path: 'create-employee',
    loadChildren: () => import('./create-employee/create-employee.module').then(m => m.CreateEmployeeModule)
  },
  {
    path: '',
    redirectTo: 'employee-list',
    pathMatch: 'full'
  },
  {
    path: 'employee-details/:id',
    loadChildren: () => import('./employee-details/employee-details.module').then(m => m.EmployeeDetailsModule)
  },
  {
    path: 'employee-list',
    loadChildren: () => import('./employee-list/employee-list.module').then(m => m.EmployeeListModule)
  },
  {
    path: 'update-employee/:id',
    loadChildren: () => import('./update-employee/update-employee.module').then(m => m.UpdateEmployeeModule)
  },
  // {
  //   path: '',
  //   redirectTo: 'employee-list',
  //   pathMatch: 'full'
  // }
//]
  //}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
