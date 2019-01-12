import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { O2guageComponent } from './o2guage.component';

describe('O2guageComponent', () => {
  let component: O2guageComponent;
  let fixture: ComponentFixture<O2guageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ O2guageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(O2guageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
