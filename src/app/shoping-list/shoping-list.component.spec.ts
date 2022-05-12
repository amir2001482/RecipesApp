import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopingListComponent } from './shoping-list.component';

describe('ShopingListComponent', () => {
  let component: ShopingListComponent;
  let fixture: ComponentFixture<ShopingListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopingListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
