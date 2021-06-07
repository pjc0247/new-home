import React from 'react';

import { IApp } from 'app/IApp';
import { Gallery } from './Gallery';

export const GalleryApp = {
  icon: require('asset/icon/gallery.png').default,
  width: 650,
  height: 420,
  Component: <Gallery />
} as IApp;
