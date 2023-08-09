import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgrxLearningComponent } from './ngrx-learning.component';

describe('NgrxLearningComponent', () => {
  let component: NgrxLearningComponent;
  let fixture: ComponentFixture<NgrxLearningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgrxLearningComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgrxLearningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
