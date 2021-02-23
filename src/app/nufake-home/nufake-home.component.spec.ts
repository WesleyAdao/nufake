import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NufakeHomeComponent } from './nufake-home.component';

describe('NufakeHomeComponent', () => {
  let component: NufakeHomeComponent;
  let fixture: ComponentFixture<NufakeHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NufakeHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NufakeHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
