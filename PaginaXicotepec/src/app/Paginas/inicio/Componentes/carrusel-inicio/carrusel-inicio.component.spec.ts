import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarruselInicioComponent } from './carrusel-inicio.component';

describe('CarruselInicioComponent', () => {
  let component: CarruselInicioComponent;
  let fixture: ComponentFixture<CarruselInicioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarruselInicioComponent]
    });
    fixture = TestBed.createComponent(CarruselInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
