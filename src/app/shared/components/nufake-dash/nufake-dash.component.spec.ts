import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NufakeDashComponent } from './nufake-dash.component';

describe('NufakeDashComponent', () => {
  let component: NufakeDashComponent;
  let fixture: ComponentFixture<NufakeDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NufakeDashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NufakeDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
