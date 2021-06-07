import React from 'react';

import windowStore, { IWindowStore } from './window';

interface IStores {
  windowStore: IWindowStore;
};

export const useStores = (): IStores => {
  return {
    windowStore,
  };
};
