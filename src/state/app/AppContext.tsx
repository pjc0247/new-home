import React, { useContext } from 'react';

import { App } from './App';

interface IAppContext {
  app: App;
};

const AppContext = React.createContext<IAppContext>({} as IAppContext);

export const useApp = (): App => {
  const { app } = useContext<IAppContext>(AppContext);
  return app;
};

interface AppContextProviderProps {
  app: App;
  children: React.ReactNode;
};
export const AppContextProvider = ({
  app,
  children,
}: AppContextProviderProps) => {

  return (
    <AppContext.Provider
      value={{
        app,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
