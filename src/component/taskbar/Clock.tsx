import React, { useState } from 'react';
import styled from 'styled-components';
import { DateTime } from 'luxon';

import { VerticalLayout } from 'atom/layout';
import { useHeartbeat } from 'utils';

interface ClockProps {

};
export const Clock = ({

}: ClockProps) => {
  const [hovered, setHovered] = useState(false);
  const [time, setTime] = useState(0);

  useHeartbeat(() => {
    setTime(time => time + 1);
  }, 1000, []);

  return (
    <Container>
      <VerticalLayout
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <ClockText
          hovered={hovered}
        >
          {DateTime.local().toFormat('hh:mm a')}
        </ClockText>
        <DateText
          hovered={hovered}
        >
          {DateTime.local().toFormat('MM, dd, yyyy')}
        </DateText>
      </VerticalLayout>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  width: 110px;

  justify-content: center;
`;
const ClockText = styled.span<any>`
  color: white;

  font-size: 20px;

  transition: all 0.32s ease;

  ${({ hovered }) => hovered ? `
    transform: scale(0.6) translateY(-18px);
  ` : `
    transform: scale(1);
  `}
`;
const DateText = styled.span<any>`
  position: absolute;
  bottom: 6px;

  color: white;

  font-size: 17px;

  transform-origin: bottom;
  transition: all 0.32s ease;

  ${({ hovered }) => hovered ? `
    transform: scaleY(1);
    opacity: 1;
  ` : `
    transform: scaleY(0);
    opacity: 0;
  `}
`;
