import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsLearningComponent } from './rxjs-learning.component';

describe('RxjsLearningComponent', () => {
  //arrange
  let component: RxjsLearningComponent;
  let fixture: ComponentFixture<RxjsLearningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RxjsLearningComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsLearningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  
  it('should create', () => {
    //act
    // ... some processing.....
    //

    //assert
    expect(component).toBeTruthy();
  });
});
