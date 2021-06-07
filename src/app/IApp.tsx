import React from 'react';

export interface IApp {
  icon: string;
  width: number;
  height: number;
  
  Component: React.ReactNode;
};
