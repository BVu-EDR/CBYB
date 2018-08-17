import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyBoundariesComponent } from './property-boundaries.component';

describe('PropertyBoundariesComponent', () => {
  let component: PropertyBoundariesComponent;
  let fixture: ComponentFixture<PropertyBoundariesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropertyBoundariesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyBoundariesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
