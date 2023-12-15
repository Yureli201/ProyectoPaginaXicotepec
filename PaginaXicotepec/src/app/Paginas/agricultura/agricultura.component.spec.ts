import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgriculturaComponent } from './agricultura.component';

describe('AgriculturaComponent', () => {
  let component: AgriculturaComponent;
  let fixture: ComponentFixture<AgriculturaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgriculturaComponent]
    });
    fixture = TestBed.createComponent(AgriculturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
