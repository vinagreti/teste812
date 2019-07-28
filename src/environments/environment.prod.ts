import { AppLanguage } from './../app/models/language';
import { AppEnvironment } from './env-base';

export const environment: AppEnvironment = {
  appName: 'teste812',
  basePath: '',
  debug: false,
  defaultLanguage: AppLanguage.EN,
  extraLanguages: [AppLanguage.ES, AppLanguage.PT],
  name: 'production',
  serverPort: 80,
  production: true,
};
