import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentApplicationsTableComponent } from './student-applications-table.component';

describe('StudentApplicationsTableComponent', () => {
  let component: StudentApplicationsTableComponent;
  let fixture: ComponentFixture<StudentApplicationsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentApplicationsTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentApplicationsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
