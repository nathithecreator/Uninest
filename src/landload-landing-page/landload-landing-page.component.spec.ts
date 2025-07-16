import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandloadLandingPageComponent } from './landload-landing-page.component';

describe('LandloadLandingPageComponent', () => {
  let component: LandloadLandingPageComponent;
  let fixture: ComponentFixture<LandloadLandingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandloadLandingPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandloadLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
