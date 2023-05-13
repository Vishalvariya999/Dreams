import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAwardComponent } from './show-award.component';

describe('ShowAwardComponent', () => {
  let component: ShowAwardComponent;
  let fixture: ComponentFixture<ShowAwardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowAwardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowAwardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
