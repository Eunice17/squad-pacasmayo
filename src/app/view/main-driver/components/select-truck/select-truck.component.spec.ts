import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectTruckComponent } from './select-truck.component';

describe('SelectTruckComponent', () => {
  let component: SelectTruckComponent;
  let fixture: ComponentFixture<SelectTruckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectTruckComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectTruckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
