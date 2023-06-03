import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HrRoutingModule } from './hr-routing.module';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { LeaveReportComponent } from './components/leave-report/leave-report.component';
import { ShowTaskComponent } from './components/show-task/show-task.component';
import { EmpBankdetailsComponent } from './components/emp-bankdetails/emp-bankdetails.component';
import { AddAwardComponent } from './components/add-award/add-award.component';
import { ShowNoticeComponent } from './components/show-notice/show-notice.component';
import { HrDashboardComponent } from './components/hr-dashboard/hr-dashboard.component';

@NgModule({
  declarations: [
    AddEmployeeComponent,
    LeaveReportComponent,
    ShowTaskComponent,
    EmpBankdetailsComponent,
    AddAwardComponent,
    ShowNoticeComponent,
    HrDashboardComponent,
],
  imports: [CommonModule, HrRoutingModule],
})
export class HrModule {}
