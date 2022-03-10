import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

/*---- Components ----*/
import GlobalStyle from './GlobalStyle';
import GoToTop from './GoToTop';

/*---- PAGES ----*/
import Home from './pages/Home';
import Model from './pages/Model';

/*---- STYLE ----*/
import "./App.scss";
import Header from './components/Header';
import Collectif from './pages/Collectif';

function App() {

  const imageDetails = {
    width: 800,
    height: 600,
  };

  return (
      <Router>
        <GlobalStyle/>
        <GoToTop/>
        <Header/>
        <Route
          render={({ location }) => (
            
            <AnimatePresence initial={false} exitBeforeEnter>
              <Switch location={location} key={location.pathname}>
                <Route
                  exact
                  path='/'
                  render={() => <Home imageDetails={imageDetails} />}
                />
                <Route
                  exact
                  path='/model/:id'
                  render={() => <Model imageDetails={imageDetails} />}
                />
                
              </Switch>
            </AnimatePresence>
          )}
        />
        <Route
          exact
          path='/collectif'
          component={Collectif}
          
        />
        
      </Router>
  );
}

export default App;
