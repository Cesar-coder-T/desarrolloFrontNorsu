import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralitiesComponent } from './generalities.component';

describe('GeneralitiesComponent', () => {
  let component: GeneralitiesComponent;
  let fixture: ComponentFixture<GeneralitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralitiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
