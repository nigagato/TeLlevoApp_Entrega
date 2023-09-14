import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistrodatosPage } from './registrodatos.page';

describe('RegistrodatosPage', () => {
  let component: RegistrodatosPage;
  let fixture: ComponentFixture<RegistrodatosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RegistrodatosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
