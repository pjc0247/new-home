import React from 'react';
import { observable } from 'mobx';

import { WindowImpl } from './impl';

export interface IWindow {
  id: string;
  icon: string;
  Component: React.ReactNode;

  maximized: boolean;
  minimized: boolean;

  renderState: IWindowRenderState;
};

export enum WindowRenderPhase {
  FadeIn = 'fade_in',
  Normal = 'normal',
  FadeOut = 'fade_out',
};
export interface IWindowRenderState {
  renderPhase: WindowRenderPhase;
};

export interface IWindowStore {
  zIndex: number;
  windows: WindowImpl[];

  // getters
  readonly activeWindows: IWindow[];

  // mutators
  dispenseZIndex(): number;
  addWindow(icon: string, Component: React.ReactNode, size?: ISize): string;
  removeWindow(id: string): void;
};
const windowStore = observable<IWindowStore>({
  zIndex: 100,
  windows: [],

  get activeWindows() {
    return this.windows
      .filter((x: IWindow) => x.renderState.renderPhase !== WindowRenderPhase.FadeOut);
  },

  dispenseZIndex() {
    return this.zIndex++;
  },
  addWindow(icon: string, Component: React.ReactNode, size?: ISize) {
    const newWindow = new WindowImpl(
      icon,
      Component,
      size,
    );
    this.windows = [...this.windows, newWindow];

    newWindow.setTimeout(() => {
      const target = this.windows.find(x => x.id === newWindow.id);
      if (target) {
        target.renderState = {
          ...target.renderState,
          renderPhase: WindowRenderPhase.Normal,
        };
      }
    }, 1000);
    return newWindow.id;
  },
  removeWindow(id: string) {
    const target = this.windows.find(x => x.id === id);
    if (target) {
      target.renderState = {
        ...target.renderState,
        renderPhase: WindowRenderPhase.FadeOut,
      };
      target.clearAllTimeouts();
      target.setTimeout(() => {
        this.windows = this.windows.filter(x => x.id !== id);
        target.dispose();
      }, 1000);
    }
  },
});
export default windowStore;
