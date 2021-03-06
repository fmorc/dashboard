import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetOptionsComponent } from './widget-options.component';

describe('WidgetOptionsComponent', () => {
  let component: WidgetOptionsComponent;
  let fixture: ComponentFixture<WidgetOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetOptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
