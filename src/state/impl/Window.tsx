import React from 'react';
import { makeAutoObservable } from 'mobx';

import { getStores } from 'state';
import { IWindow, IWindowRenderState, WindowRenderPhase } from '../window';

let globalWindowId = 0;
let globalWindowZIndex = 100;

export class WindowImpl implements IWindow {
  static readonly DefaultSize: ISize = { width: 640, height: 480 };

  id: string;
  icon: string;
  title: string;
  Component: React.ReactNode;

  position: IPosition;
  size: ISize;
  maximized: boolean;
  minimized: boolean;
  zIndex: number;

  renderState: IWindowRenderState;
  
  private ref?: HTMLDivElement;
  private prevPosition: IPosition;
  private prevSize: ISize;
  private timers: number[] = [];

  get isActive() {
    if (this.renderState.renderPhase === WindowRenderPhase.FadeOut)
      return false;
    return true;
  }
  get isResponsible() {
    if (!this.isActive)
      return false;
    if (this.renderState.renderPhase === WindowRenderPhase.Minimize)
      return false;
    return true;
  }
  get isFocused() {
    const { windowStore } = getStores();
    return windowStore.activeWindows[windowStore.activeWindows.length - 1] === this;
  }

  static show(icon: string, Component: React.ReactNode, size?: ISize) {
    const { windowStore } = getStores();
    windowStore.addWindow(icon, Component, size);
  }

  constructor(icon: string, Component: React.ReactNode, size?: ISize) {
    makeAutoObservable(this);
    
    this.id = `w${globalWindowId++}`;
    this.icon = icon;
    this.title = '';
    this.Component = Component;
    this.position = this.getInitialPosition();
    this.prevPosition = this.position;
    this.size = size || WindowImpl.DefaultSize;
    this.prevSize = this.size;
    this.maximized = false;
    this.minimized = false;
    this.zIndex = globalWindowZIndex ++;
    this.renderState = {
      renderPhase: WindowRenderPhase.FadeIn,
    };

    this.focus();
  }

  private getInitialPosition(): IPosition {
    return {
      x: 50 + globalWindowId % 5 * 25,
      y: 50 + globalWindowId % 5 * 25,
    };
  }

  dispose() {
    this.clearAllTimeouts();
    // todo: next focused window
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

  saveRef(ref: HTMLDivElement) {
    this.ref = ref;
  }
  savePosition(x: number, y: number) {
    this.position = { x, y };
  }

  focus() {
    const { windowStore } = getStores();
    windowStore.bringToFront(this.id);

    this.minimized = false;
  }
  bringToFront() {
    this.focus();
    this.zIndex = globalWindowZIndex ++;
    this.renderState = {
      ...this.renderState,
      renderPhase: WindowRenderPhase.Normal,
    };
  }
  unmaximize() {
    this.maximized = false;

    this.lerpBounds(this.prevPosition, this.prevSize);
  }
  maximize() {
    this.maximized = true;
    this.prevPosition = { ...this.position };

    this.lerpBounds({
      x: 0,
      y: 0,
    }, {
      width: document.body.offsetWidth,
      height: document.body.offsetHeight - 50,
    });
  }
  minimize() {
    this.minimized = true;
    this.renderState = {
      ...this.renderState,
      renderPhase: WindowRenderPhase.Minimize,
    };
  }

  private lerpBounds(targetPosition: IPosition, targetSize: ISize) {
    let i = 0;
    let position = { ...this.position };
    let size = { ...this.size };

    const stepAnimation = () => {
      const lerpSpeed = 0.175;
      position = {
        x: position.x + (targetPosition.x - position.x) * lerpSpeed,
        y: position.y + (targetPosition.y - position.y) * lerpSpeed,
      };
      size = {
        width: size.width + (targetSize.width - size.width) * lerpSpeed,
        height: size.height + (targetSize.height - size.height) * lerpSpeed,
      };

      this.ref!.style.transform = `translate(${position.x}px, ${position.y}px)`;
      (this.ref!.childNodes[0] as HTMLDivElement).style.width = `${size.width}px`;
      (this.ref!.childNodes[0] as HTMLDivElement).style.height = `${size.height}px`;

      i ++;
      if (i < 50)
        requestAnimationFrame(stepAnimation);
      else {
        this.position = { ...position };
        this.size = { ...size };
      }
    };
    requestAnimationFrame(() => {
      stepAnimation();
    });
  }
};
