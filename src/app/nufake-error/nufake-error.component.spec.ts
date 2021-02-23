import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NufakeErrorComponent } from './nufake-error.component';

describe('NufakeErrorComponent', () => {
  let component: NufakeErrorComponent;
  let fixture: ComponentFixture<NufakeErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NufakeErrorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NufakeErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
