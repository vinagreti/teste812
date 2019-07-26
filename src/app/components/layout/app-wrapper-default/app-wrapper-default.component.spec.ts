import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule } from '@ngx-translate/core';
import { NavbarTestingModule } from '../navbar/testing/navbar-testing.module';
import { AppWrapperDefaultComponent } from './app-wrapper-default.component';


describe('AppWrapperDefaultComponent', () => {
  let component: AppWrapperDefaultComponent;
  let fixture: ComponentFixture<AppWrapperDefaultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppWrapperDefaultComponent ],
      imports: [
        RouterTestingModule,
        NavbarTestingModule,
        TranslateModule.forRoot(),
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppWrapperDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
