import React from 'react';

import { IApp } from 'app/IApp';
import { Rania } from './Rania';

export const RaniaApp = {
  icon: require('asset/app/github/icon.png').default,
  width: 640,
  height: 480,
  Component: <Rania />
} as IApp;
