import React from 'react';

import { IApp } from 'app/IApp';
import { Blank } from './Blank';

export const BlankApp = {
  icon: require('asset/app/blank/icon.png').default,
  width: 480,
  height: 360,
  Component: <Blank />
} as IApp;
