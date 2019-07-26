import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppLanguage } from '@models/language';
import { BehaviorSubject } from 'rxjs';
import { skip } from 'rxjs/operators';
import { NavbarComponent } from './navbar.component';
import { NavbarTestingModule } from './testing/navbar-testing.module';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        NavbarTestingModule,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title in a h1 tag', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent.trim()).toEqual('app.title');
  });

  it('should set language to PT', (done) => {
    component.setLanguage(AppLanguage.PT);
    component.lang$
    .pipe(skip(1)) // ignore the initial value
    .subscribe(language => {
      expect(language).toEqual(AppLanguage.PT);
      done();
    });
  });

  it('should set language to EN', (done) => {
    component.lang$
    .pipe(skip(1)) // ignore the initial value
    .subscribe(language => {
      expect(language).toEqual(AppLanguage.EN);
      done();
    });
    component.setLanguage(AppLanguage.EN);
  });

  it('should render the change language buttons', () => {
    const compiled = fixture.debugElement.nativeElement;
    component.lang$ = new BehaviorSubject(AppLanguage.PT);
    fixture.detectChanges();
    expect(compiled.querySelector('button')).toBeTruthy();
  });
});
