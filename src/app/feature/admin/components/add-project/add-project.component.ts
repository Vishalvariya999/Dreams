import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.scss'],
})
export class AddProjectComponent {
  public projectForm!: FormGroup;
  public btnName: string = 'Submit';
  public submited: boolean = false;

  constructor(private fb: FormBuilder) {
    this.projectForm = this.fb.group({
      project_name: [null, Validators.required],
      client_name: [null, Validators.required],
      project_manager_email: [null, Validators.required],
      from_date: [null, Validators.required],
      to_date: [null, Validators.required],
      project_image: [null, Validators.required],
      description: [null, Validators.required],
      payment: [null, Validators.required],
      department: [null, Validators.required],
    });
  }

  get frmControl() {
    return this.projectForm.controls;
  }

  public onSubmitHandle() {
    if (this.projectForm.invalid) {
      this.submited = true;
      return;
    }
  }
}
