import React, { useState } from 'react';
import styled from 'styled-components';
import { DateTime } from 'luxon';

import { useHeartbeat } from 'utils';

interface LargeClockProps {

};
export const LargeClock = ({

}: LargeClockProps) => {
  const [time, setTime] = useState(0);

  useHeartbeat(() => {
    setTime(time => time + 1);
  }, 1000, []);

  return (
    <Container>
      <ClockText>
        {DateTime.local().toFormat('hh:mm a')}
      </ClockText>
      <DateText>
        {DateTime.local().toFormat('MM, dd, yyyy')}
      </DateText>
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  right: 20px;
  top: 20px;

  display: flex;
  flex-direction: column;

  width: max-conten;

  align-items: center;
  justify-content: center;
`;
const ClockText = styled.span<any>`
  color: white;

  font-size: 32px;
  font-weight: bold;
`;
const DateText = styled.span<any>`
  color: white;

  font-size: 11.5px;
`;
