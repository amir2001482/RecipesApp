import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopingEditComponent } from './shoping-edit.component';

describe('ShopingEditComponent', () => {
  let component: ShopingEditComponent;
  let fixture: ComponentFixture<ShopingEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopingEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopingEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
