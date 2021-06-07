import React from 'react';

import { IApp } from 'app/IApp';
import { Rookie } from './Rookie';

export const RookieApp = {
  icon: require('asset/app/rookie/icon.png').default,
  width: 800,
  height: 600,
  Component: <Rookie />
} as IApp;
