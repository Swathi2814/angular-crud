import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { FormsModule } from '@angular/forms';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { CreateEmployeeModule } from './create-employee/create-employee.module';
import { EmployeeDetailsModule } from './employee-details/employee-details.module';
import { EmployeeListModule } from './employee-list/employee-list.module';
import { UpdateEmployeeModule } from './update-employee/update-employee.module';

@NgModule({
  declarations: [
    AppComponent
    //  EmployeeListComponent,
    //   CreateEmployeeComponent,
    //  UpdateEmployeeComponent,
    //  EmployeeDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CreateEmployeeModule,
    EmployeeDetailsModule,
    EmployeeListModule,
    UpdateEmployeeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
