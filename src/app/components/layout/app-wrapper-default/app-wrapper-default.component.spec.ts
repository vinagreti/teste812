import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppWrapperDefaultComponent } from './app-wrapper-default.component';

describe('AppWrapperDefaultComponent', () => {
  let component: AppWrapperDefaultComponent;
  let fixture: ComponentFixture<AppWrapperDefaultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppWrapperDefaultComponent ]
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
