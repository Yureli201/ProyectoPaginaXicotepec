import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRecursosComponent } from './admin-recursos.component';

describe('AdminRecursosComponent', () => {
  let component: AdminRecursosComponent;
  let fixture: ComponentFixture<AdminRecursosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminRecursosComponent]
    });
    fixture = TestBed.createComponent(AdminRecursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
