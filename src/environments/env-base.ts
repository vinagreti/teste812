export interface AppEnvironment {
  appName: string;
  production: boolean;
  [key: string]: any;
}

export const EnvBaseConfig: AppEnvironment = {
  appName: 'teste812',
  production: false,
};
