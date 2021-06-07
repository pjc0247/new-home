import React, { useState } from 'react';
import styled from 'styled-components';

import { NavPanel, WindowTitlebar } from 'atom/window';
import { VerticalLayout } from 'atom/layout';
import { Crossfade } from 'atom/display';

const AppIcon = require('asset/app/github/icon.png').default;

enum ContentType {
  Index = 'index',
  SlowSharp = 'slowSharp',
  Github = 'github',
};

interface GithubProps {
};
export const Github = ({
  ...props
}: GithubProps) => {
  const [contentType, setContentType] = useState(ContentType.Index);

  return (
    <>
      <NavPanel
        icon={AppIcon}
        items={[
          {
            icon: require('asset/icon/user.png').default,
            label: 'Profile',
            onClick: () => setContentType(ContentType.Index),
          },
          {
            icon: require('asset/icon/csharp.png').default,
            label: 'SlowSharp',
            onClick: () => setContentType(ContentType.SlowSharp),
          },
          {
            icon: require('asset/icon/github.png').default,
            label: 'UniScript',
            onClick: () => setContentType(ContentType.Github),
          },
        ]}
      />

      <Content>
        <WindowTitlebar
          icon={require('asset/app/github/icon.png').default}
          title="Github"
        />
        <Crossfade  
          style={{ background: 'rgba(240, 240, 240, 0.8)' }}
        >
          {contentType === ContentType.Index && (
            <IFrame
              loading="lazy"
              src="https://github-e.com/#/user/pjc0247"
            />
          )}
          {contentType === ContentType.SlowSharp && (
            <IFrame
              loading="lazy"
              src="https://github-e.com/#/user/pjc0247/repos/SlowSharp?_k=msw5wx"
            />
          )}
          {contentType === ContentType.Github && (
            <IFrame
              loading="lazy"
              src="https://github-e.com/#/user/pjc0247/repos/UniScript?_k=msw5wx"
            />
          )}
        </Crossfade>
      </Content>
    </>
  );
};

const Content = styled(VerticalLayout)`
  flex: 1;
`;
const IFrame = styled.iframe.attrs({
  frameBorder: 'none',
})`
  flex: 1;
`;
