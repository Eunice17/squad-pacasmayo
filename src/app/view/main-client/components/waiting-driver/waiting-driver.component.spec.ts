import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaitingDriverComponent } from './waiting-driver.component';

describe('WaitingDriverComponent', () => {
  let component: WaitingDriverComponent;
  let fixture: ComponentFixture<WaitingDriverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WaitingDriverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WaitingDriverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
