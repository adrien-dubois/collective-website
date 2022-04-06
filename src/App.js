import React from 'react';
import { 
  BrowserRouter as Router, 
  Route, 
  Switch 
} from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

/*---- Components ----*/
import GlobalStyle from './GlobalStyle';
import GoToTop from './GoToTop';

/*---- PAGES ----*/
import Home from './pages/Home';
import Model from './pages/Model';
import Collectif from './pages/Collectif';
import Portfolio from 'pages/Portfolio';
import Contact from 'pages/Contact';

/*---- STYLE ----*/
import "./App.scss";
import MainLayout from 'components/MainLayout';

function App() {

  const imageDetails = {
    width: 800,
    height: 600,
  };


  return (
      <Router>
        <MainLayout>
        <GlobalStyle/>
        <GoToTop/>
        
        {window.innerWidth > 1100 ? 
        (<Route
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
        ) : (
          <Route
          render={({ location }) => (
            
            <AnimatePresence initial={false} exitBeforeEnter>
              <Switch location={location} key={location.pathname}>
                <Route
                  exact
                  path='/'
                  render={() => <Model imageDetails={imageDetails} />}
                />
                
              </Switch>
            </AnimatePresence>
          )}
        />
        )}
        
        <Route
          exact
          path='/collectif'
          component={Collectif}
        />

        <Route
          exact
          path='/portfolio'
          component={Portfolio}
        />

        <Route
          exact
          path='/contact'
          component={Contact}
        />

      </MainLayout>
      </Router>
  );
}

export default App;
