import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import GlobalStyle from './GlobalStyle';
import GoToTop from './GoToTop';

function App() {
  return (
    <Router>
      <GlobalStyle/>
      <GoToTop/>
      Hello World
    </Router>
  );
}

export default App;
