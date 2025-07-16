import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandlordBodyComponent } from './landlord-body.component';

describe('LandlordBodyComponent', () => {
  let component: LandlordBodyComponent;
  let fixture: ComponentFixture<LandlordBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandlordBodyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandlordBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
