import React, { useContext } from 'react';

import { WindowImpl } from 'state/window';

interface IWindowContext {
  window: WindowImpl;
};

const WindowContext = React.createContext<IWindowContext>({} as IWindowContext);

export const useWindow = (): WindowImpl => {
  const { window } = useContext<IWindowContext>(WindowContext);
  return window;
};

interface WindowContextProviderProps {
  window: WindowImpl;
  children: React.ReactNode;
};
export const WindowContextProvider = ({
  window,
  children,
}: WindowContextProviderProps) => {

  return (
    <WindowContext.Provider
      value={{
        window,
      }}
    >
      {children}
    </WindowContext.Provider>
  );
};
