import React from 'react';

import windowStore, { IWindowStore } from './window';

interface IStores {
  windowStore: IWindowStore;
};

// workaround for ts warning
export const getStores = (): IStores => {
  return {
    windowStore,
  };
};
export const useStores = (): IStores => {
  return {
    windowStore,
  };
};
