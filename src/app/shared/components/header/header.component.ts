import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { MaterialExampleModule } from '../../material.module';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule, MaterialExampleModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public headers: any;
  public role: any;

  constructor(private router: Router) {
    this.role = localStorage.getItem('role')
      ? localStorage.getItem('role')
      : '';
    console.log('role:', this.role);
  }
  ngOnInit(): void {
    this.route();
  }

  private route() {
    if (this.role === 'SuperAdmin') {
      switch (this.role) {
        case 'SuperAdmin':
          this.headers = [
            {
              data: 'Dashboard',
              link: '/admin/dashboard/dashboardadmin',
            },
            {
              data: 'Project Manager',
              link: '/admin/dashboard/addmanager',
            },
            {
              data: 'HR',
              link: '/admin/dashboard/addhr',
            },
            {
              data: 'Client',
              link: '/admin/dashboard/addclient',
            },
            {
              data: 'Project',
              link: '/admin/dashboard/addproject',
            },
            {
              data: 'Leave',
              link: '/admin/dashboard/leavereport',
            },
            {
              data: 'Award',
              link: '/admin/dashboard/award_details',
            },
            {
              data: 'Task',
              link: '/admin/dashboard/taskhm',
            },
            {
              data: 'Salary',
              link: '/admin/dashboard/salary_details',
            },
            {
              data: 'Notice',
              link: '/admin/dashboard/notice',
            },
          ];
          break;

        case 'HR':
          this.headers = [
            {
              data: 'Dashboard',
              link: '/manager/dashboard/dashboardadmin',
            },
            {
              data: 'Show Employee',
              link: '/admin/dashboard/showemployee',
            },
            {
              data: 'Show Task',
              link: '/admin/dashboard/showtask',
            },
          ];
          break;

        case 'MANAGER':
          this.headers = [
            {
              data: 'Dashboard',
              link: '/manager/dashboard/dashboardadmin',
            },
            {
              data: 'Show Employee',
              link: '/admin/dashboard/showemployee',
            },
            {
              data: 'Show Task',
              link: '/admin/dashboard/showtask',
            },
          ];
          break;

        case 'EMPLOYEE':
          this.headers = [
            {
              data: 'Dashboard',
              link: '/manager/dashboard/dashboardadmin',
            },
            {
              data: 'Show Employee',
              link: '/admin/dashboard/showemployee',
            },
            {
              data: 'Show Task',
              link: '/admin/dashboard/showtask',
            },
          ];
          break;
      }
    }
  }

  public onClickLogout() {
    this.router.navigate(['/auth/login']);
    localStorage.clear();
  }
}
