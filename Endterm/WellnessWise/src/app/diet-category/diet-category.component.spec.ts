import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DietCategoryComponent } from './diet-category.component';

describe('DietCategoryComponent', () => {
  let component: DietCategoryComponent;
  let fixture: ComponentFixture<DietCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DietCategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DietCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
