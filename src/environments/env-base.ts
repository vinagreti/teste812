import { AppLanguage } from './../app/models/language';

export interface AppEnvironment {
  appName: string;
  basePath: string;
  debug: boolean;
  defaultLanguage: AppLanguage;
  enabledLanguages: AppLanguage[];
  name: string;
  production: boolean;
  serverPort: number;
  [key: string]: any;
}

export const EnvBaseConfig: AppEnvironment = {
  appName: 'teste812',
  basePath: '',
  debug: false,
  defaultLanguage: AppLanguage.EN,
  enabledLanguages: [AppLanguage.EN],
  name: 'BaseEnvironment',
  serverPort: 4200,
  production: false,
};
