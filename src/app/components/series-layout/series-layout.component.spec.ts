import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeriesLayoutComponent } from './series-layout.component';

describe('SeriesLayoutComponent', () => {
  let component: SeriesLayoutComponent;
  let fixture: ComponentFixture<SeriesLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeriesLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeriesLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
