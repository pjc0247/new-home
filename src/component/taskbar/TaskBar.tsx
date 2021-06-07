import React from 'react';
import styled from 'styled-components';

import { HorizontalShadow } from 'atom/shadow';
import { HorizontalLayout, Push } from 'atom/layout';
import { Clock } from './Clock';

interface TaskBarProps {

};
export const TaskBar = ({

}: TaskBarProps) => {

  return (
    <Container>
      <HorizontalShadow />

      <HorizontalLayout
        fill
        align="center"
      >
        <Push />
        <Clock />
      </HorizontalLayout>
    </Container>
  )
};

const Container = styled.div`
  position: absolute;
  left: 0px;
  bottom: 0px;

  display: flex;
  width: 100%;
  height: 42.5px;

  background-color: rgba(25, 35, 45, 0.75);
`;
