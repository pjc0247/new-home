import React from 'react';

import { IApp } from 'app/IApp';
import { getStores } from 'state';

export class App {

  static launch(app: IApp) {
    const { windowStore } = getStores();

    windowStore.addWindow(
      app.icon,
      app.Component,
      {
        width: app.width,
        height: app.height,
      },
    );
  }
};
