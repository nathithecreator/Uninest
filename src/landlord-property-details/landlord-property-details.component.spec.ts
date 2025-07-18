import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandlordPropertyDetailsComponent } from './landlord-property-details.component';

describe('LandlordPropertyDetailsComponent', () => {
  let component: LandlordPropertyDetailsComponent;
  let fixture: ComponentFixture<LandlordPropertyDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandlordPropertyDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandlordPropertyDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
