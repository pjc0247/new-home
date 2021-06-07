import React from 'react';

import { IApp } from 'app/IApp';
import { Github } from './Github';

export const GithubApp = {
  icon: require('asset/app/github/icon.png').default,
  width: 560,
  height: 700,
  Component: <Github />
} as IApp;
