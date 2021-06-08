import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { transform } from '@babel/standalone';

import { NavPanel, WindowTitlebar } from 'atom/window';
import { VerticalLayout } from 'atom/layout';

const evalInContext = (js: string, context: object) => {
  return function() { return eval(js); }.call(context);
}

interface CodepadPreviewWindowProps {
  code: string;
};
export const CodepadPreviewWindow = ({
  code,
  ...props
}: CodepadPreviewWindowProps) => {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      const output = transform(code, { presets: ['env', 'react'] }).code;
      const Comp = evalInContext(`
        const require = this.require;
        ${output!}
      `, {
        require: (x: string) => {
          if (x === 'react') return require('react');
          if (x === 'styled-components') return require('styled-components');
          return null;
        },
      });

      ReactDOM.render(Comp(), contentRef.current);
    }
  }, []);

  return (
    <>
      <Content>
        <WindowTitlebar
          icon={require('asset/icon/code.png').default}
          title="Live Preview"
        />
        <RenderArea
          ref={contentRef}
        >
        </RenderArea>
      </Content>
    </>
  );
};

const Content = styled(VerticalLayout)`
  flex: 1;
`;
const RenderArea = styled.div`
  flex: 1;
`;
