import { AppEnvironment } from './env-base';
import { AppLanguage } from '@models/language';

export const environment: AppEnvironment = {
  appName: 'teste812',
  basePath: '',
  defaultLanguage: AppLanguage.EN,
  enabledLanguages: [AppLanguage.EN],
  production: true,
};
