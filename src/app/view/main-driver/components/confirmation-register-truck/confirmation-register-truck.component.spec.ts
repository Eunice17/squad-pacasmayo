import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmationRegisterTruckComponent } from './confirmation-register-truck.component';

describe('ConfirmationRegisterTruckComponent', () => {
  let component: ConfirmationRegisterTruckComponent;
  let fixture: ComponentFixture<ConfirmationRegisterTruckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmationRegisterTruckComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmationRegisterTruckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
