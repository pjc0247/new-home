import React, { useRef, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import styled, { CSSProperties } from 'styled-components';

interface CrossfadeProps {
  style?: CSSProperties;
  children: React.ReactNode;
};
export const Crossfade = ({
  children,
  ...props
}: CrossfadeProps) => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const parent = document.createElement('div');
    let child: any = null;

    ReactDOM.render((
      <>{children}</>
    ), parent, () => {
      child = parent.children[0] as any;
      wrapperRef.current?.append(child);

      child.style.position = 'absolute';
      child.style.left = '0px';
      child.style.top = '0px';
      child.style.width = '100%';
      child.style.height = '100%';
      child.style.transition = 'all 1s ease';
      child.style.transform = 'scale(1.2)';
      child.style.opacity = '0';
      setTimeout(() => {
        child.style.transform = 'scale(1)';
        child.style.opacity = '1';
      }, 100);
    }) as any;
    
    return () => {
      parent.remove();
      if (child) {
        child.style.position = 'absolute';
        child.style.left = '0px';
        child.style.top = '0px';
        child.style.transition = 'all 0.3s ease';
        child.style.transform = 'scale(1.1)';
        child.style.opacity = '0';

        setTimeout(() => {
          child.remove();
        }, 300);
      };
    };
  }, [children]);

  return (
    <Container
      {...props}
    >
      <Wrapper
        ref={wrapperRef}
      >
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  background: rgba(240, 240, 240, 0.8);

  overflow: hidden;
`;
const Wrapper = styled.div`
`;


/*

    const child = childrenRef.current?.children[0] as any;
    realWrapperRef.current?.append(child);

    const div = document.createElement('div');
    childrenRef.current?.append(div);

    if (childrenRef.current) {
      const key = Object.keys(childrenRef.current).find(x => x.startsWith('__reactFiber'));
      // @ts-ignore
      const r = childrenRef.current[key] as any;
      try {
        r.child.child.stateNode = div;
      } catch(e) {
      }
    }

    child.style.position = 'absolute';
    child.style.left = '0px';
    child.style.top = '0px';
    child.style.width = '100%';
    child.style.height = '100%';
    child.style.transition = 'all 1s ease';
    child.style.transform = 'scale(1.2)';
    child.style.opacity = '0';
    setTimeout(() => {
      child.style.transform = 'scale(1)';
      child.style.opacity = '1';
    }, 100);
    
    return () => {
      if (child) {
        child.style.position = 'absolute';
        child.style.left = '0px';
        child.style.top = '0px';
        child.style.transition = 'all 0.3s ease';
        child.style.transform = 'scale(1.1)';
        child.style.opacity = '0';
      }

      setTimeout(() => {
        realWrapperRef.current?.removeChild(child);
      }, 300);
    };
*/