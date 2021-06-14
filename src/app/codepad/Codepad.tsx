import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Editor from '@monaco-editor/react';

import { VerticalLayout } from 'atom/layout';
import { NavPanel, WindowTitlebar } from 'component/window';
import { WindowImpl } from 'state/window';
import { useApp } from 'state/app';
import { CodepadPreviewWindow } from './window';
import { DefaultSnippet } from './snippet';

const AppIcon = require('asset/app/codepad/icon.png').default;

interface CodepadProps {
};
export const Codepad = ({
  ...props
}: CodepadProps) => {
  const app = useApp();
  const [code, setCode] = useState(DefaultSnippet);

  useEffect(() => {
    
  }, []);

  const onClickDeploy = () => {
    app.showWindow(AppIcon, (
      <CodepadPreviewWindow
        code={code}
      />
    ), {
      width: 400,
      height: 400,
    });
  };

  return (
    <>
      <NavPanel
        icon={AppIcon}
      />

      <Content>
        <WindowTitlebar
          title="Web Codepad"
        />
        <button
          onClick={onClickDeploy}
        >
          Deploy
        </button>
        <Editor
          height="100%"
          defaultLanguage="javascript"
          defaultValue={DefaultSnippet}
          value={code}
          onChange={e => setCode(e!)}
        />
      </Content>
    </>
  );
};

const Content = styled(VerticalLayout)`
  flex: 1;
`;
