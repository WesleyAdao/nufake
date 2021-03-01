import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NufakeNewpassComponent } from './nufake-newpass.component';

describe('NufakeNewpassComponent', () => {
  let component: NufakeNewpassComponent;
  let fixture: ComponentFixture<NufakeNewpassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NufakeNewpassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NufakeNewpassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
