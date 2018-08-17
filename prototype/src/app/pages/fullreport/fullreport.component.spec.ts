import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullreportComponent } from './fullreport.component';

describe('FullreportComponent', () => {
  let component: FullreportComponent;
  let fixture: ComponentFixture<FullreportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullreportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
