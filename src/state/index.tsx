import React from 'react';

import appStore, { IAppStore } from './appStore';
import windowStore, { IWindowStore } from './windowStore';

interface IStores {
  appStore: IAppStore;
  windowStore: IWindowStore;
};

// workaround for ts warning
//   (all methods that starts with `use` are recognized as react hook)
export const getStores = (): IStores => {
  return {
    appStore,
    windowStore,
  };
};
export const useStores = (): IStores => {
  return {
    appStore,
    windowStore,
  };
};
