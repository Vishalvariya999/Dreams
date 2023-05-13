import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpRecomandationComponent } from './emp-recomandation.component';

describe('EmpRecomandationComponent', () => {
  let component: EmpRecomandationComponent;
  let fixture: ComponentFixture<EmpRecomandationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpRecomandationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpRecomandationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
