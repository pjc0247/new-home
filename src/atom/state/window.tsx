import { observable } from 'mobx';

export interface IWindow {
  id: string;
};

export interface IWindowStore {
  windows: IWindow[],

  addWindow(): string;
  removeWindow(id: string): void;
};
const windowStore = observable<IWindowStore>({
  windows: [],

  addWindow() {
    const newWindow: IWindow = {
      id: `${Math.random()}`,
    };
    this.windows = [...this.windows, newWindow];
    return newWindow.id;
  },
  removeWindow(id: string) {
    this.windows = this.windows.filter(x => x.id !== id);
  },
});
export default windowStore;
