import React from 'react';
import { observable } from 'mobx';

import { App } from './app';

export interface IAppStore {
  apps: App[];

  // mutators
  addApp(app: App): void;
};
const appStore = observable<IAppStore>({
  apps: [],

  addApp(app: App) {
    this.apps = [
      ...this.apps,
      app,
    ];
  },
});
export default appStore;
