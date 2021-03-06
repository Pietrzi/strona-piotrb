import React from 'react';
import './scss/style.scss';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import Main from './components/Main';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Paint1 from './components/Paint1';
import Paint2 from './components/Paint2';
import Paint3 from './components/Paint3';
import BioNew from './components/BioNew';
import Backdrop from './components/Backdrop';
import SideMenu from './components/SideMenu';
import Film1 from './components/Film1';
import Film2 from './components/Film2';
import Film3 from './components/Film3';
import Film4 from './components/Film4';
import Film5 from './components/Film5';
import Film6 from './components/Film6';
import Film7 from './components/Film7';
import FilmArt1 from './components/FilmArt1';
import FilmArt2 from './components/FilmArt2';
import FilmArt3 from './components/FilmArt3';
import FilmArt4 from './components/FilmArt4';
import FilmArt5 from './components/FilmArt5';
import FilmArt6 from './components/FilmArt6';
import FilmArt7 from './components/FilmArt7';
import MovieNew from './components/MovieNew';
import MovieArtNew from './components/MovieArtNew';
import Emotes from './components/Emotes';

import "slick-carousel/slick/slick.scss"; 
import "slick-carousel/slick/slick-theme.scss";



class App extends React.Component {
  state = {
    sideMenu: false,
    goRight: false
  }

  sideMenuClickHandler = () => {
    this.setState(prevState => {
      return { sideMenu: !prevState.sideMenu }
    })
  }
  backdropClickHandler = () => {
    this.setState({
      sideMenu: false
    })
  }

  render() {

    let backdrop;
    if (this.state.sideMenu) {
      backdrop = <Backdrop click={this.backdropClickHandler}/>
    }

    return (
      <>
      {backdrop}
      <BrowserRouter>
        <Navbar menuHandler={this.sideMenuClickHandler} />
        <SideMenu show={this.state.sideMenu} click={this.backdropClickHandler}/>
        <Switch>
          <Route exact path='/' component={Main} />
          <Route path='/movie' component={MovieNew} />
          <Route path='/film1' component={Film1} />
          <Route path='/film2' component={Film2} />
          <Route path='/film3' component={Film3} />
          <Route path='/film4' component={Film4} />
          <Route path='/film5' component={Film5} />
          <Route path='/film6' component={Film6} />
          <Route path='/film7' component={Film7} />
          <Route path='/video-art1' component={FilmArt6} />
          <Route path='/video-art2' component={FilmArt1} />
          <Route path='/video-art3' component={FilmArt2} />
          <Route path='/video-art4' component={FilmArt3} />
          <Route path='/video-art5' component={FilmArt4} />
          <Route path='/video-art6' component={FilmArt5} />
          <Route path='/video-art7' component={FilmArt7} />
          <Route path='/movieart' component={MovieArtNew} />
          <Route path='/raz' component={Paint1} />
          <Route path='/dwa' component={Paint2} />
          <Route path='/trzy' component={Paint3} />
          <Route path='/emotes' component={Emotes} />
          <Route path='/biocontact' component={BioNew} />

        </Switch>
        <Footer />
      </BrowserRouter>
      </>  
  );
  }
  
}

export default App;
