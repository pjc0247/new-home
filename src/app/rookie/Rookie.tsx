import React, { useState } from 'react';
import styled from 'styled-components';

import { Window, NavPanel, WindowTitlebar } from 'atom/window';
import { VerticalLayout } from 'atom/layout';
import { Crossfade } from 'atom/display';

const AppIcon = require('asset/app/rookie/icon.png').default;

enum ContentType {
  Index = 'index',
  Github = 'github',
};

interface RookieProps {
};
export const Rookie = ({
  ...props
}: RookieProps) => {
  const [contentType, setContentType] = useState(ContentType.Index);

  return (
    <>
      <NavPanel
        icon={AppIcon}
        items={[
          {
            icon: require('asset/icon/puzzle.png').default,
            label: 'Playground',
            onClick: () => setContentType(ContentType.Index),
          },
          {
            icon: require('asset/icon/github.png').default,
            label: 'Github',
            onClick: () => setContentType(ContentType.Github),
          },
        ]}
      />

      <Content>
        <WindowTitlebar
          icon={require('asset/app/rookie/icon.png').default}
          title="Rookie"
        />
        <Crossfade>
          {contentType === ContentType.Index && (
            <IFrame
              loading="lazy"
              src="https://pjc0247.github.io/try-rookie/"
            />
          )}
          {contentType === ContentType.Github && (
            <IFrame
              loading="lazy"
              src="https://github-e.com/#/user/pjc0247/repos/rookie.lang"
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
