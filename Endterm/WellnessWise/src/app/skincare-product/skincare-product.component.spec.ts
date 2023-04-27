import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkincareProductComponent } from './skincare-product.component';

describe('SkincareProductComponent', () => {
  let component: SkincareProductComponent;
  let fixture: ComponentFixture<SkincareProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkincareProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkincareProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
