import { AppLanguage } from '@models/language';

export interface AppEnvironment {
  appName: string;
  basePath: string,
  debug: boolean;
  defaultLanguage: AppLanguage;
  enabledLanguages: AppLanguage[];
  production: boolean;
  [key: string]: any;
}

export const EnvBaseConfig: AppEnvironment = {
  appName: 'teste812',
  basePath: '',
  debug: false,
  defaultLanguage: AppLanguage.EN,
  enabledLanguages: [AppLanguage.EN],
  production: false,
};
