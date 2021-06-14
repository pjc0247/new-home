import React from 'react';

import { IApp } from 'app/IApp';
import { VR } from './VR';

export const VRApp = {
  icon: require('asset/icon/vr.png').default,
  width: 1024,
  height: 600,
  Component: <VR />
} as IApp;
