import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MgCourseComponent } from './mg-course.component';

describe('MgCourseComponent', () => {
  let component: MgCourseComponent;
  let fixture: ComponentFixture<MgCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MgCourseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MgCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
