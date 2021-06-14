import React from 'react';
import { makeAutoObservable } from 'mobx';

import { IApp } from 'app/IApp';
import { WindowImpl } from 'state/window';
import { getStores } from 'state';

export class App {
  app: IApp;
  params: any;

  windows: WindowImpl[];

  static launch(app: IApp, params: any = {}) {
    const { appStore } = getStores();

    appStore.addApp(new App(app, params));
  }

  constructor(app: IApp, params: any) {
    makeAutoObservable(this);

    this.app = app;
    this.params = params;
    this.windows = [];

    // spawn default window
    this.showWindow(app.icon, app.Component, {
      width: params?.width || app.width,
      height: params?.height || app.height,
    });
  }

  showWindow(icon: string, Component: React.ReactNode, size?: ISize) {
    const { appStore, windowStore } = getStores();

    const window = windowStore.addWindow(
      this,
      icon,
      Component,
      size,
    );
    this.windows = [...this.windows, window];
  }
};
