import React from 'react';

import { IApp } from 'app/IApp';
import { Blade } from './Blade';

export const BladeApp = {
  icon: require('asset/app/blade/icon.png').default,
  width: 1000,
  height: 1200,
  Component: <Blade />
} as IApp;
