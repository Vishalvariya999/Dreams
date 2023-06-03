import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-addhr',
  templateUrl: './addhr.component.html',
  styleUrls: ['./addhr.component.scss'],
})
export class AddhrComponent {
  public addHrForm!: FormGroup;
  public btnName: string = 'Submit';
  public submited: boolean = false;

  constructor(
    private fb: FormBuilder,
    private toastrService: ToastrService,
    private adminService: AdminService
  ) {
    this.formValidation();
  }

  private formValidation() {
    this.addHrForm = this.fb.group({
      name: ['', Validators.required],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
        ],
      ],
      mobile: [
        '',
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(10),
        ],
      ],
      aadhar_image: ['', Validators.required],
      pancard_image: ['', Validators.required],
      address: ['', Validators.required],
      birth_date: ['', Validators.required],
      salary: ['', Validators.required],
    });
  }

  get frmControl() {
    return this.addHrForm.controls;
  }

  public onSubmitHandle() {
    if (this.addHrForm.invalid) {
      this.submited = true;
      this.toastrService.error('Please Enter valid Details', 'Error');
      return;
    } else {
      console.log('this.addHrForm.value', this.addHrForm.value);
    }
  }
}
