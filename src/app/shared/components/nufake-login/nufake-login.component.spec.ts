import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NufakeLoginComponent } from './nufake-login.component';

describe('NufakeLoginComponent', () => {
  let component: NufakeLoginComponent;
  let fixture: ComponentFixture<NufakeLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NufakeLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NufakeLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
