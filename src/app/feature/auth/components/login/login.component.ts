import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public loginForm!: FormGroup;
  public submited: boolean = false;
  public btnName: string = 'Login';
  public loading: boolean = false;
  public hide: boolean = true;

  // @ViewChild('btnLogin') btnLogin!: ElementRef;

  constructor(
    private fb: FormBuilder,
    private toastrService: ToastrService,
    private authService: AuthService,
    private router: Router
  ) {
    this.validationLogin();
  }

  ngOnInit(): void {}

  public validationLogin() {
    this.loginForm = this.fb.group({
      email: [
        null,
        [
          Validators.required,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
        ],
      ],
      password: [null, Validators.required],
    });
  }

  get frmControl() {
    return this.loginForm.controls;
  }

  onHandleSubmit() {
    this.loading = true;
    if (this.loginForm.invalid) {
      this.submited = true;
      // console.log('Invalid');
      // this.toastrService.error('Please fill all details', 'Error', {
      //   closeButton: true,
      //   progressBar: true,
      //   progressAnimation: 'decreasing',
      // });
      this.loading = false;
      return;
    } else {
      const data = {
        ...this.loginForm.value,
      };
      this.authService.postLoginData(data).subscribe((res: any) => {
        if (res && res.success === true) {
          console.log('res', res.data);
          this.toastrService.success(res?.message, 'Success');
          localStorage.setItem('access-token', res.data[1].Token);
          localStorage.setItem('role', res.data[0].role);
          localStorage.setItem('email', res.data[0].email);
          localStorage.setItem('name', res.data[0].name);
          switch (res.data[0].role) {
            case 'SuperAdmin':
              this.router.navigate(['/admin']);
              break;
            case 'HR':
              this.router.navigate(['/hr']);
              break;
            case 'MANAGER':
              this.router.navigate(['/proj_manager']);
              break;
            case 'EMPLOYEE':
              this.router.navigate(['/employee']);
              break;
            default:
              break;
          }
          this.loading = false;
        } else {
          this.toastrService.error(res.message, 'Error');
          this.loading = false;
        }
      });
      console.log('this.loginForm.value', this.loginForm.value);
      // this.loginForm.reset();
      // this.loading = false;
    }
    // this.loading = false;
  }
}
