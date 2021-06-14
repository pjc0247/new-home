import React from 'react';
import styled from 'styled-components';

interface YoutubePlayerProps {
  url: string;
};
export const YoutubePlayer = ({
  url,
  ...props
}: YoutubePlayerProps) => {

  return (
    <IFrame
      src={url}
      {...props}
    />
  );
};

const IFrame = styled.iframe.attrs({
  frameBorder: 0,
})`
  width: 100%;
  height: 100%;
`;
