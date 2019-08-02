import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule } from '@ngx-translate/core';
import { NavbarTestingModule } from '../navbar/testing/navbar-testing.module';
import { AppWrapperPrivateComponent } from './app-wrapper-private.component';


describe('AppWrapperPrivateComponent', () => {
  let component: AppWrapperPrivateComponent;
  let fixture: ComponentFixture<AppWrapperPrivateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppWrapperPrivateComponent ],
      imports: [
        RouterTestingModule,
        NavbarTestingModule,
        TranslateModule.forRoot(),
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppWrapperPrivateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
