import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-fpassword',
  templateUrl: './fpassword.component.html',
  styleUrls: ['./fpassword.component.scss']
})
export class FpasswordComponent implements OnInit {

  public frmFpassword!:FormGroup;
  public submited:boolean=false;

  constructor(
    private fb:FormBuilder
  ){
    this.validation();
  }

  ngOnInit(): void {}

  private validation(){
    this.frmFpassword = this.fb.group({
      email:['',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]]
    })
  }

  get frmControl() {
    return this.frmFpassword.controls
  }

  public onHandleSubmit(){
    if(this.frmFpassword.invalid){
      this.submited = true;
      console.log('Invalid')
      return
    }
    else{
      this.submited = true;
      console.log('this.frmFpassword.value', this.frmFpassword.value)
      this.frmFpassword.reset();
    }
  }

}
