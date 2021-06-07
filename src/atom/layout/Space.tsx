import React from 'react';

interface SpaceProps {
  width?: number;
  height?: number;
};
export const Space = ({
  width = 1,
  height = 1,
  ...props
}: SpaceProps) => {
  return (
    <div
      style={{ width: `${width}px`, height: `${height}px` }}
      {...props}
    />
  );
};
