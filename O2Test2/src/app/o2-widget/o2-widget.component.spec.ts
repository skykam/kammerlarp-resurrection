import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { O2WidgetComponent } from './o2-widget.component';

describe('O2WidgetComponent', () => {
  let component: O2WidgetComponent;
  let fixture: ComponentFixture<O2WidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ O2WidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(O2WidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
