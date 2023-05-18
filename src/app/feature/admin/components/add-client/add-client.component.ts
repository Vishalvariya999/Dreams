import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

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
      
    })
  }

  get frmControl() {
    return this.clientRegistration.controls;
  }

  public onSubmitHandle() {
    if (this.clientRegistration.invalid) {
      return;
    }
  }
}
