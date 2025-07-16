import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavLandlordComponent } from './nav-landlord.component';

describe('NavLandlordComponent', () => {
  let component: NavLandlordComponent;
  let fixture: ComponentFixture<NavLandlordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavLandlordComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavLandlordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
