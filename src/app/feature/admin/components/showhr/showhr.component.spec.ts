import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowhrComponent } from './showhr.component';

describe('ShowhrComponent', () => {
  let component: ShowhrComponent;
  let fixture: ComponentFixture<ShowhrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowhrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowhrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
