import React from 'react';

import { IApp } from 'app/IApp';
import { Browser } from './Browser';

export const BrowserApp = {
  icon: require('asset/app/blank/icon.png').default,
  width: 480,
  height: 360,
  Component: <Browser />
} as IApp;
