import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FloodZoneComponent } from './flood-zone.component';

describe('FloodZoneComponent', () => {
  let component: FloodZoneComponent;
  let fixture: ComponentFixture<FloodZoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FloodZoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FloodZoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
