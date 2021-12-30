import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GnrlsComponent } from './gnrls.component';

describe('GnrlsComponent', () => {
  let component: GnrlsComponent;
  let fixture: ComponentFixture<GnrlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GnrlsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GnrlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
