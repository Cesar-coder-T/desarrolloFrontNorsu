import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WlcmComponent } from './wlcm.component';

describe('WlcmComponent', () => {
  let component: WlcmComponent;
  let fixture: ComponentFixture<WlcmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WlcmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WlcmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
