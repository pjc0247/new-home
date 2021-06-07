import React, { useEffect } from 'react';

export const useHeartbeat = (callback: () => void, interval: number, deps = []) => {
  useEffect(() => {
    const timerId = setInterval(() => {
      callback();
    }, interval);

    return () => clearInterval(timerId);
  }, deps);
};
