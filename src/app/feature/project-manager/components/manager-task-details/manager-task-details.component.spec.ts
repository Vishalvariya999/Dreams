import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerTaskDetailsComponent } from './manager-task-details.component';

describe('ManagerTaskDetailsComponent', () => {
  let component: ManagerTaskDetailsComponent;
  let fixture: ComponentFixture<ManagerTaskDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerTaskDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagerTaskDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
