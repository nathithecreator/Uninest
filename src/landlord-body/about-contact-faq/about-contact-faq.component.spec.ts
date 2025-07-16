import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutContactFaqComponent } from './about-contact-faq.component';

describe('AboutContactFaqComponent', () => {
  let component: AboutContactFaqComponent;
  let fixture: ComponentFixture<AboutContactFaqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutContactFaqComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutContactFaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
