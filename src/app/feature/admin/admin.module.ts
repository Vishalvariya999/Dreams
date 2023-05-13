import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddManagerComponent } from './components/add-manager/add-manager.component';
import { ShowManagerComponent } from './components/show-manager/show-manager.component';
import { AddhrComponent } from './components/addhr/addhr.component';
import { ShowhrComponent } from './components/showhr/showhr.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgApexchartsModule } from 'ng-apexcharts';
import { MaterialExampleModule } from 'src/app/shared/material.module';
import { AddProjectComponent } from './components/add-project/add-project.component';
import { AddClientComponent } from './components/add-client/add-client.component';
import { LeaveReportComponent } from './components/leave-report/leave-report.component';
import { ShowAwardComponent } from './components/show-award/show-award.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { SalaryDetailsComponent } from './components/salary-details/salary-details.component';
import { AddNoticeComponent } from './components/add-notice/add-notice.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    DashboardComponent,
    AddManagerComponent,
    ShowManagerComponent,
    AddhrComponent,
    ShowhrComponent,
    AddProjectComponent,
    AddClientComponent,
    LeaveReportComponent,
    ShowAwardComponent,
    AddTaskComponent,
    SalaryDetailsComponent,
    AddNoticeComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgApexchartsModule,
    MaterialExampleModule,
    FontAwesomeModule,
  ],
})
export class AdminModule {}
