import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCoursesComponent } from './show-courses.component';

describe('ShowCoursesComponent', () => {
  let component: ShowCoursesComponent;
  let fixture: ComponentFixture<ShowCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowCoursesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
