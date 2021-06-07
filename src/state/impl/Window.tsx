import React from 'react';
import { makeAutoObservable } from 'mobx';

import { IWindow, IWindowRenderState, WindowRenderPhase } from '../window';

let globalWindowId = 0;

export class WindowImpl implements IWindow {
  id: string;
  icon: string;
  Component: React.ReactNode;
  renderState: IWindowRenderState;
  
  private timers: number[] = [];

  constructor(icon: string, Component: React.ReactNode) {
    makeAutoObservable(this);
    
    this.id = `w${globalWindowId++}`;
    this.icon = icon;
    this.Component = Component;
    this.renderState = {
      renderPhase: WindowRenderPhase.FadeIn,
    };
  }

  dispose() {
    this.clearAllTimeouts();
  }
  clearAllTimeouts() {
    this.timers.forEach(tid => clearTimeout(tid));
  }

  setTimeout(fn: () => void, timeout: number) {
    const tid = window.setTimeout(() => {
      fn();
      this.timers = this.timers.filter(_tid => _tid !== tid);
    }, timeout);
    this.timers.push(tid);
  }
};
