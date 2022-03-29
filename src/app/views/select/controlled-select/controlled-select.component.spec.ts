import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlledSelectComponent } from './controlled-select.component';

describe('ControlledSelectComponent', () => {
  let component: ControlledSelectComponent;
  let fixture: ComponentFixture<ControlledSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControlledSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlledSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
