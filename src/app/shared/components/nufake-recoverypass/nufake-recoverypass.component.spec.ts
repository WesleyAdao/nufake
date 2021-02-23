import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NufakeRecoverypassComponent } from './nufake-recoverypass.component';

describe('NufakeRecoverypassComponent', () => {
  let component: NufakeRecoverypassComponent;
  let fixture: ComponentFixture<NufakeRecoverypassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NufakeRecoverypassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NufakeRecoverypassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
