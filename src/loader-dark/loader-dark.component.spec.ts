import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoaderDarkComponent } from './loader-dark.component';

describe('LoaderDarkComponent', () => {
  let component: LoaderDarkComponent;
  let fixture: ComponentFixture<LoaderDarkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoaderDarkComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoaderDarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
