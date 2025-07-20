import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TenantsTableComponent } from './tenants-table.component';

describe('TenantsTableComponent', () => {
  let component: TenantsTableComponent;
  let fixture: ComponentFixture<TenantsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TenantsTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TenantsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
