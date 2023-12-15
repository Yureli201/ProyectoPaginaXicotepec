import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminComentariosComponent } from './admin-comentarios.component';

describe('AdminComentariosComponent', () => {
  let component: AdminComentariosComponent;
  let fixture: ComponentFixture<AdminComentariosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminComentariosComponent]
    });
    fixture = TestBed.createComponent(AdminComentariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
