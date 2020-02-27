import React from 'react';
import './scss/style.scss';
import {
  HashRouter,
  Route,
  Switch
} from 'react-router-dom';
import Main from './components/Main';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Movie from './components/Movie';
import MovieArt from './components/MovieArt';
import Paint from './components/Paint';
import BioContact from './components/BioContact';



function App() {
  return (
      <HashRouter>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Main} />
          <Route path='/movie' component={Movie} />
          <Route path='/movieart' component={MovieArt} />
          <Route path='/paint' component={Paint} />
          <Route path='/biocontact' component={BioContact} />
        </Switch>
        <Footer />
      </HashRouter>
  );
}

export default App;
