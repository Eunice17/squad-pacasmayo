import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmationMessageDriverComponent } from './confirmation-message-driver.component';

describe('ConfirmationMessageDriverComponent', () => {
  let component: ConfirmationMessageDriverComponent;
  let fixture: ComponentFixture<ConfirmationMessageDriverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmationMessageDriverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmationMessageDriverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
