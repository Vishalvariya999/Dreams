import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectManagerRoutingModule } from './project-manager-routing.module';
import { ProjectDetailsComponent } from './components/project-details/project-details.component';
import { ShowLeaveReportComponent } from './components/show-leave-report/show-leave-report.component';
import { ShowEmpLeaveComponent } from './components/show-emp-leave/show-emp-leave.component';
import { TaskGiveEmpComponent } from './components/task-give-emp/task-give-emp.component';
import { ManagerTaskDetailsComponent } from './components/manager-task-details/manager-task-details.component';
import { EmpRecomandationComponent } from './components/emp-recomandation/emp-recomandation.component';
import { ShowNoticeComponent } from './components/show-notice/show-notice.component';


@NgModule({
  declarations: [
    ProjectDetailsComponent,
    ShowLeaveReportComponent,
    ShowEmpLeaveComponent,
    TaskGiveEmpComponent,
    ManagerTaskDetailsComponent,
    EmpRecomandationComponent,
    ShowNoticeComponent
  ],
  imports: [
    CommonModule,
    ProjectManagerRoutingModule
  ]
})
export class ProjectManagerModule { }
