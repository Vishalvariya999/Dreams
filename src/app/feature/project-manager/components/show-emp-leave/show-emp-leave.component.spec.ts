import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowEmpLeaveComponent } from './show-emp-leave.component';

describe('ShowEmpLeaveComponent', () => {
  let component: ShowEmpLeaveComponent;
  let fixture: ComponentFixture<ShowEmpLeaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowEmpLeaveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowEmpLeaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
