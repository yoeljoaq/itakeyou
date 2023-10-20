import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DatospersonaPage } from './datospersona.page';

describe('DatospersonaPage', () => {
  let component: DatospersonaPage;
  let fixture: ComponentFixture<DatospersonaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DatospersonaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
