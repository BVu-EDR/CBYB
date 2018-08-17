import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WetlandsComponent } from './wetlands.component';

describe('WetlandsComponent', () => {
  let component: WetlandsComponent;
  let fixture: ComponentFixture<WetlandsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WetlandsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WetlandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
