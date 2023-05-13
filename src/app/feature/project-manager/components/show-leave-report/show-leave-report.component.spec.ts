import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowLeaveReportComponent } from './show-leave-report.component';

describe('ShowLeaveReportComponent', () => {
  let component: ShowLeaveReportComponent;
  let fixture: ComponentFixture<ShowLeaveReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowLeaveReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowLeaveReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
