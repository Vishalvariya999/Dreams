import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from '../../services/admin.service';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { faEye, faPen, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-add-manager',
  templateUrl: './add-manager.component.html',
  styleUrls: ['./add-manager.component.scss'],
})
export class AddManagerComponent implements OnInit {
  public managerRegistartion!: FormGroup;
  public btnName: string = 'Submit';
  public pageTitle: string = 'Project Manager Registaration';
  public managers: any = [];
  public faEye = faEye;
  public faPen = faPen;
  public faTrash = faTrash;
  public managerDeail: any;
  // public icons: any = [
  //   {
  //     faEye: faEye,
  //   },
  //   {
  //     faPen: faPen,
  //   },
  //   {
  //     faTrash: faTrash,
  //   },
  // ];
  private horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  private verticalPosition: MatSnackBarVerticalPosition = 'top';
  public langeages: any = [
    {
      label: 'ReactJs',
      value: 'ReactJs',
    },
    {
      label: 'AngularJs',
      value: 'AngularJs',
    },
    {
      label: 'NodeJs',
      value: 'NodeJs',
    },
    {
      label: 'Python',
      value: 'Python',
    },
    {
      label: 'ROR',
      value: 'ROR',
    },
    {
      label: 'Testing',
      value: 'Testing',
    },
  ];

  constructor(
    private fb: FormBuilder,
    private toastrService: ToastrService,
    private adminService: AdminService,
    private matSnackBar: MatSnackBar
  ) {
    this.formValidation();
    this.getManager();
  }

  private formValidation() {
    this.managerRegistartion = this.fb.group({
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
      department: ['', Validators.required],
      salary: ['', Validators.required],
    });
  }

  get frmControl() {
    return this.managerRegistartion.controls;
  }

  ngOnInit(): void {}

  onSubmitHandle() {
    if (this.managerRegistartion.invalid) {
      this.toastrService.error('Please Enter valid Details', 'Error');
      return;
    } else {
      switch (this.btnName) {
        case 'Submit':
          console.log(
            'this.managerRegistartion.value',
            this.managerRegistartion.value
          );
          const data = {
            ...this.managerRegistartion.value,
            password: '123456',
            role: 'MANAGER',
          };
          console.log('data', data);
          this.adminService.postPrjManager(data).subscribe((res: any) => {
            if (res && res.success) {
              console.log('res', res);
              this.toastrService.success(res.message, 'Success');
            }
            this.toastrService.error(res.message, 'Error');
          });
          this.managerRegistartion.reset();
          break;
        case 'Update':
          console.log('Update recored successfully.');
          this.managerRegistartion.reset();
          break;
      }
    }
  }

  private getManager() {
    this.adminService.getPrjManager().subscribe((res: any) => {
      if (res && res?.success) {
        this.managers = res?.data;
        console.log('res.data', res.data);
        this.toastrService.success(res.message, 'Success');
        // this.matSnackBar.open(res.message, 'Sucess', {
        //   horizontalPosition: this.horizontalPosition,
        //   verticalPosition: this.verticalPosition,
        // });
      } else {
        this.toastrService.error(res.message, 'Error');
      }
    });
  }

  public onHandleView(id: any) {
    console.log('id', id);
    this.adminService.getPrjManagerDetails(id).subscribe((res: any) => {
      if (res && res.success) {
        console.log('res', res);
        this.managerDeail = res?.data;
        console.log('this.managerDeail', this.managerDeail);
      }
    });
  }

  public onHandleUpdate(id: any, data: any) {
    console.log('id', id);
    console.log('data', data);
    this.pageTitle = 'Update Project Manager Details';
    this.btnName = 'Update';
    this.managerRegistartion.patchValue(data);
  }
}
