import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Pages from './components/Pages';

function App() {
  return (
    <BrowserRouter>
      <Pages />
    </BrowserRouter>
  );
}

export default App;
