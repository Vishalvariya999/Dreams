import { AddNoticeComponent } from './components/add-notice/add-notice.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from 'src/app/shared/components/header/header.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddManagerComponent } from './components/add-manager/add-manager.component';
import { AddhrComponent } from './components/addhr/addhr.component';
import { AddClientComponent } from './components/add-client/add-client.component';
import { AddProjectComponent } from './components/add-project/add-project.component';
import { LeaveReportComponent } from './components/leave-report/leave-report.component';
import { ShowAwardComponent } from './components/show-award/show-award.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { SalaryDetailsComponent } from './components/salary-details/salary-details.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    component: HeaderComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboardadmin',
        pathMatch: 'full',
      },
      {
        path: 'dashboardadmin',
        component: DashboardComponent,
      },
      {
        path: 'addmanager',
        component: AddManagerComponent,
      },
      {
        path: 'addhr',
        component: AddhrComponent,
      },
      {
        path: 'addclient',
        component: AddClientComponent,
      },
      {
        path: 'addproject',
        component: AddProjectComponent,
      },
      {
        path: 'leavereport',
        component: LeaveReportComponent,
      },
      {
        path: 'award_details',
        component: ShowAwardComponent,
      },
      {
        path: 'taskhm',
        component: AddTaskComponent,
      },
      {
        path: 'salary_details',
        component: SalaryDetailsComponent,
      },
      {
        path: 'notice',
        component: AddNoticeComponent,
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'dashboard',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
