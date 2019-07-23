import { TestBed } from '@angular/core/testing';

import { LanguageService } from './language.service';
import { AppLanguage } from '@models/language';
import { TranslateModule } from '@ngx-translate/core';

describe('LanguageService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      TranslateModule.forRoot(),
    ]
  }));

  it('should be created', () => {
    const service: LanguageService = TestBed.get(LanguageService);
    expect(service).toBeTruthy();
  });

  it('should get language', () => {
    const service: LanguageService = TestBed.get(LanguageService);
    expect(service.getLanguage()).toBeTruthy();
  });

  it('should set language', () => {
    const service: LanguageService = TestBed.get(LanguageService);
    service.setLanguage(AppLanguage.PT);
    expect(service.getLanguage()).toEqual(AppLanguage.PT);
  });
});
