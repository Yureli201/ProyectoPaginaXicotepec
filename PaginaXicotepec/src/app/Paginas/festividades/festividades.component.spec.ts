import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FestividadesComponent } from './festividades.component';

describe('FestividadesComponent', () => {
  let component: FestividadesComponent;
  let fixture: ComponentFixture<FestividadesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FestividadesComponent]
    });
    fixture = TestBed.createComponent(FestividadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
