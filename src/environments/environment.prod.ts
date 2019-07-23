import { AppLanguage } from '@models/language';
import { AppEnvironment } from './env-base';

export const environment: AppEnvironment = {
  appName: 'teste812',
  basePath: '',
  debug: false,
  defaultLanguage: AppLanguage.EN,
  enabledLanguages: [AppLanguage.EN],
  production: true,
};
