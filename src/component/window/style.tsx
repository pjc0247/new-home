export const WindowFadeIn = `
  @keyframes windowFadeIn {
    from {
      opacity: 0;
      transform: scale(0.8);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
`;
export const WindowFadeOut = `
  @keyframes windowFadeOut {
    from {
      opacity: 1;
      transform: scale(1);
    }
    to {
      opacity: 0;
      transform: scale(0.9);
    }
  }
`;
export const WindowMinimize = `
  @keyframes windowMinimize {
    from {
      opacity: 1;
      transform: scale(1) translateY(0px);
    }
    to {
      opacity: 0;
      transform: scale(0.4) translateY(100px);
    }
  }
`;
