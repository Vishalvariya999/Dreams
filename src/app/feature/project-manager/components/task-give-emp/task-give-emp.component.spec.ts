import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskGiveEmpComponent } from './task-give-emp.component';

describe('TaskGiveEmpComponent', () => {
  let component: TaskGiveEmpComponent;
  let fixture: ComponentFixture<TaskGiveEmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskGiveEmpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskGiveEmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
