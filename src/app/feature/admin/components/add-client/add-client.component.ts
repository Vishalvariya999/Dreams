import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.scss'],
})
export class AddClientComponent {
  public clientRegistration!: FormGroup;
  public pageTitle: string = 'Client Registration';
  public btnName: string = 'Submit';
  public submited: boolean = false;

  constructor(private fb: FormBuilder) {
    this.clientRegistration = this.fb.group({
      client_name: [null, Validators.required],
      client_email: [
        null,
        [
          Validators.required,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
        ],
      ],
      client_mobile: [
        null,
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(10),
        ],
      ],
      client_address: [null, Validators.required],
      office_address: [null, Validators.required],
      aadhar_image: [null, Validators.required],
      facebook_id: [null, Validators.required],
      insta_id: [null, Validators.required],
      linkedin_id: [null, Validators.required],
      location: [null, Validators.required],
    });
  }

  get frmControl() {
    return this.clientRegistration.controls;
  }

  public onSubmitHandle() {
    if (this.clientRegistration.invalid) {
      this.submited = true;
      return;
    }
  }
}
