import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpBankdetailsComponent } from './emp-bankdetails.component';

describe('EmpBankdetailsComponent', () => {
  let component: EmpBankdetailsComponent;
  let fixture: ComponentFixture<EmpBankdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpBankdetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpBankdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
