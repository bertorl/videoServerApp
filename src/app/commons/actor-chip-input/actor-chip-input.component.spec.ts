import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActorChipInputComponent } from './actor-chip-input.component';

describe('ActorChipInputComponent', () => {
  let component: ActorChipInputComponent;
  let fixture: ComponentFixture<ActorChipInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActorChipInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActorChipInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
