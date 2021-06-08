import React from 'react';

import { IApp } from 'app/IApp';
import { Codepad } from './Codepad';

export const CodepadApp = {
  icon: require('asset/icon/code.png').default,
  width: 750,
  height: 480,
  Component: <Codepad />
} as IApp;
