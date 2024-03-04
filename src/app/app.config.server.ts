import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './app.config';
import { providePageServerLoad } from './lib/provide-server-load';

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(),
    providePageServerLoad()
  ]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
