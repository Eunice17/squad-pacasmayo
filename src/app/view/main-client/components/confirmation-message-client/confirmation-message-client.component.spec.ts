import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmationMessageClientComponent } from './confirmation-message-client.component';

describe('ConfirmationMessageClientComponent', () => {
  let component: ConfirmationMessageClientComponent;
  let fixture: ComponentFixture<ConfirmationMessageClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmationMessageClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmationMessageClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
