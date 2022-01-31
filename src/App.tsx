import React, { useEffect } from 'react';
import { BrowserRouter } from "react-router-dom";
import 'antd/dist/antd.css';

import { DesktopPage } from 'page/DesktopPage';
import { isMobile } from 'utils';

const App = () => {
  useEffect(() => {
    if (isMobile())
      alert('Sorry, this page does not work properly on mobile devices.');
  }, []);

  return (
    <BrowserRouter>
      <DesktopPage />
    </BrowserRouter>
  );
}
export default App;
