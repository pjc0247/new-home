import React from 'react';

import { IApp } from 'app/IApp';
import { SlowSharp } from './SlowSharp';

export const SlowSharpApp = {
  icon: require('asset/app/rookie/icon.png').default,
  width: 1200,
  height: 700,
  Component: <SlowSharp />
} as IApp;
