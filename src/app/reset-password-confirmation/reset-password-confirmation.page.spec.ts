import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ResetPasswordConfirmationPage } from './reset-password-confirmation.page';

describe('ResetPasswordConfirmationPage', () => {
  let component: ResetPasswordConfirmationPage;
  let fixture: ComponentFixture<ResetPasswordConfirmationPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ResetPasswordConfirmationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
