export const DefaultSnippet = `// TS is not supported!
import React from 'react';
import styled from 'styled-components';

const HelloWorldApp = () => {
  return (
    <Container>
      <HelloWorldText>
        Hello World;
      </HelloWorldText>
    </Container>
  );
};

const Container = styled.div\`
  display: flex;
  width: 100%;
  height: 100%;
\`;
const HelloWorldText = styled.div\`
  color: white;

  margin: auto auto;
\`;

HelloWorldApp; // Dont't remove this`;
