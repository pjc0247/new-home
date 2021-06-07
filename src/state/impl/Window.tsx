import React from 'react';
import { makeAutoObservable } from 'mobx';

import { IWindow, IWindowRenderState, WindowRenderPhase } from '../window';

let globalWindowId = 0;

export class WindowImpl implements IWindow {
  static readonly DefaultSize: ISize = { width: 640, height: 480 };

  id: string;
  icon: string;
  Component: React.ReactNode;

  position: IPosition;
  size: ISize;
  maximized: boolean;
  minimized: boolean;

  renderState: IWindowRenderState;
  
  private ref?: HTMLDivElement;
  private prevPosition: IPosition;
  private prevSize: ISize;
  private timers: number[] = [];

  constructor(icon: string, Component: React.ReactNode, size?: ISize) {
    makeAutoObservable(this);
    
    this.id = `w${globalWindowId++}`;
    this.icon = icon;
    this.Component = Component;
    this.position = this.getInitialPosition();
    this.prevPosition = this.position;
    this.size = size || WindowImpl.DefaultSize;
    this.prevSize = this.size;
    this.maximized = false;
    this.minimized = false;
    this.renderState = {
      renderPhase: WindowRenderPhase.FadeIn,
    };
  }

  private getInitialPosition(): IPosition {
    return {
      x: 200 + globalWindowId % 5 * 50,
      y: 200 + globalWindowId % 5 * 50,
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

  saveRef(ref: HTMLDivElement) {
    this.ref = ref;
    console.log('ref', ref);
  }
  savePosition(x: number, y: number) {
    this.position = { x, y };
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
  }

  private lerpBounds(targetPosition: IPosition, targetSize: ISize) {
    let i = 0;
    let position = { ...this.position };
    let size = { ...this.size };

    const stepAnimation = () => {
      const lerpSpeed = 0.12;
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
