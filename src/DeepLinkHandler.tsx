import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { App } from 'state/app';
import { IApp } from 'app/IApp';
import { BladeApp } from 'app/blade';
import { GalleryApp } from 'app/gallery';
import { GithubApp } from 'app/github';
import { RaniaApp } from 'app/rania';
import { VRApp } from 'app/vr';
import { BrowserApp } from 'app/browser/app';

export const DeepLinkHandler = () => {
  const [searchParams] = useSearchParams();
  const app = searchParams.get('app');
  const argv = searchParams.get('argv');

  useEffect(() => {
    if (app) {
      let appToLaunch: IApp | undefined;
      appToLaunch = {
        'github': GithubApp,
        'vr': VRApp,
        'gallery': GalleryApp,
        'blade': BladeApp,
        'rania_saga': RaniaApp,
        'browser': BrowserApp,
      }[app];

      if (appToLaunch) {
        App.launch(appToLaunch, JSON.parse(argv || '{}'));
      }
    }
  }, [app, argv]);

  return (
    <></>
  );
};
