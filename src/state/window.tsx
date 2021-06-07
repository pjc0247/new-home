import { observable } from 'mobx';

export interface IWindow {
  id: string;

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
  windows: IWindow[];

  dispenseZIndex(): number;
  addWindow(): string;
  removeWindow(id: string): void;
};
const windowStore = observable<IWindowStore>({
  zIndex: 100,
  windows: [],

  dispenseZIndex() {
    return this.zIndex++;
  },
  addWindow() {
    const newWindow: IWindow = {
      id: `${Math.random()}`,

      renderState: {
        renderPhase: WindowRenderPhase.FadeIn,
      },
    };
    this.windows = [...this.windows, newWindow];

    setTimeout(() => {
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
      setTimeout(() => {
        this.windows = this.windows.filter(x => x.id !== id);
      }, 1000);
    }
  },
});
export default windowStore;
