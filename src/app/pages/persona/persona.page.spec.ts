import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PersonaPage } from './persona.page';

describe('PersonaPage', () => {
  let component: PersonaPage;
  let fixture: ComponentFixture<PersonaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PersonaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
