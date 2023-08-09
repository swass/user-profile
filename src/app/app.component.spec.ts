import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  //arrange
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'user-profile'`, () => {
    //act
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    //assert
    expect(app.title).toEqual('user-profile');
  });

  it('should render title', () => {
    //act
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;

    //assert
    expect(compiled.querySelector('.content span')?.textContent).toContain('user-profile app is running!');
  });
});
