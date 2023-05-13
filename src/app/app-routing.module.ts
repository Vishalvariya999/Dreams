import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full',
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('src/app/feature/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('src/app/feature/admin/admin.module').then((m) => m.AdminModule),
  },
  {
    path: 'hr',
    loadChildren: () =>
      import('src/app/feature/hr/hr.module').then((m) => m.HrModule),
  },
  {
    path: 'proj_manager',
    loadChildren: () =>
      import('src/app/feature/project-manager/project-manager.module').then(
        (m) => m.ProjectManagerModule
      ),
  },
  {
    path: 'employee',
    loadChildren: () =>
      import('src/app/feature/employee/employee.module').then(
        (m) => m.EmployeeModule
      ),
  },
  {
    path: '**',
    redirectTo: 'auth',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
