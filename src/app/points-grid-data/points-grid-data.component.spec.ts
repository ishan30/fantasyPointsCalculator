import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PointsGridDataComponent } from './points-grid-data.component';

describe('PointsGridDataComponent', () => {
  let component: PointsGridDataComponent;
  let fixture: ComponentFixture<PointsGridDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PointsGridDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PointsGridDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
