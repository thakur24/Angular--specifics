import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CretaeproductComponent } from './cretaeproduct.component';

describe('CretaeproductComponent', () => {
  let component: CretaeproductComponent;
  let fixture: ComponentFixture<CretaeproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CretaeproductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CretaeproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
