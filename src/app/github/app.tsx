import React from 'react';

import { IApp } from 'app/IApp';
import { Github } from './Github';

export const GithubApp = {
  icon: require('asset/app/github/icon.png').default,
  width: 800,
  height: 1000,
  Component: <Github />
} as IApp;
