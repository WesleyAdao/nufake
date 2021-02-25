import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultCardComponent } from './default-card.component';

describe('DefaultCardComponent', () => {
  let component: DefaultCardComponent;
  let fixture: ComponentFixture<DefaultCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefaultCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
