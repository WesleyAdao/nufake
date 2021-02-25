import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardListComponent } from '../card-list/card-list.component';
import { DefaultCardComponent } from '../default-card/default-card.component';
import { NufakeDashComponent } from './nufake-dash.component';

describe('NufakeDashComponent', () => {
  let component: NufakeDashComponent;
  let fixture: ComponentFixture<NufakeDashComponent>;
  let cardList: CardListComponent;
  let defaultCard: DefaultCardComponent;

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
