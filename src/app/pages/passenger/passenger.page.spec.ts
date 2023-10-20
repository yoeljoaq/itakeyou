import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PassengerPage } from './passenger.page';

describe('PassengerPage', () => {
  let component: PassengerPage;
  let fixture: ComponentFixture<PassengerPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PassengerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
