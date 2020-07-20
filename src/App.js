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
import FilmArt1 from './components/FilmArt1';
import FilmArt2 from './components/FilmArt2';
import FilmArt3 from './components/FilmArt3';
import FilmArt4 from './components/FilmArt4';
import FilmArt5 from './components/FilmArt5';
import MovieNew from './components/MovieNew';
import MovieArtNew from './components/MovieArtNew';



class App extends React.Component {
  state = {
    sideMenu: false,
    movieDisplay: false,
    movieArtDisplay: false,
    bioDisplay: false,
    film1: false,
    film2: false,
    film3: false,
    film4: false,
    film5: false,
    filmArt1: false,
    filmArt2: false,
    filmArt3: false,
    filmArt4: false,
    filmArt5: false
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

  yesFilmArt1Handler = () => {
    this.setState({
      filmArt1: true
    })
  }

  noFilmArt1Handler = () => {
    this.setState({
      filmArt1: false
    })
  }

  yesFilmArt2Handler = () => {
    this.setState({
      filmArt2: true
    })
  }

  noFilmArt2Handler = () => {
    this.setState({
      filmArt2: false
    })
  }

  yesFilmArt3Handler = () => {
    this.setState({
      filmArt3: true
    })
  }

  noFilmArt3Handler = () => {
    this.setState({
      filmArt3: false
    })
  }

  yesFilmArt4Handler = () => {
    this.setState({
      filmArt4: true
    })
  }

  noFilmArt4Handler = () => {
    this.setState({
      filmArt4: false
    })
  }

  yesFilmArt5Handler = () => {
    this.setState({
      filmArt5: true
    })
  }

  noFilmArt5Handler = () => {
    this.setState({
      filmArt5: false
    })
  }

  render() {

    let backdrop;
    if (this.state.sideMenu) {
      backdrop = <Backdrop click={this.backdropClickHandler}/>
    }

    let filmArt1Display;
    if (this.state.filmArt1) {
      filmArt1Display = <FilmArt1 noFilmArt1Handler={this.noFilmArt1Handler}/>
    }

    let filmArt2Display;
    if (this.state.filmArt2) {
      filmArt2Display = <FilmArt2 noFilmArt2Handler={this.noFilmArt2Handler}/>
    }

    let filmArt3Display;
    if (this.state.filmArt3) {
      filmArt3Display = <FilmArt3 noFilmArt3Handler={this.noFilmArt3Handler}/>
    }

    let filmArt4Display;
    if (this.state.filmArt4) {
      filmArt4Display = <FilmArt4 noFilmArt4Handler={this.noFilmArt4Handler}/>
    }

    let filmArt5Display;
    if (this.state.filmArt5) {
      filmArt5Display = <FilmArt5 noFilmArt5Handler={this.noFilmArt5Handler}/>
    }

    return (
      <>
      {backdrop}
      <BrowserRouter>
        <Navbar 
          menuHandler={this.sideMenuClickHandler}
          noFilmArt1Handler={this.noFilmArt1Handler}
          noFilmArt2Handler={this.noFilmArt2Handler}
          noFilmArt3Handler={this.noFilmArt3Handler}
          noFilmArt4Handler={this.noFilmArt4Handler}
          noFilmArt5Handler={this.noFilmArt5Handler}

          />
        <SideMenu 
          show={this.state.sideMenu}
          noFilmArt1Handler={this.noFilmArt1Handler}
          noFilmArt2Handler={this.noFilmArt2Handler}
          noFilmArt3Handler={this.noFilmArt3Handler}
          noFilmArt4Handler={this.noFilmArt4Handler}
          noFilmArt5Handler={this.noFilmArt5Handler}
        />
        <Switch>
          <Route exact path='/' component={Main} />
          <Route path='/movie' component={MovieNew} />
          <Route path='/film1' component={Film1} />
          <Route path='/film2' component={Film2} />
          <Route path='/film3' component={Film3} />
          <Route path='/film4' component={Film4} />
          <Route path='/film5' component={Film5} />
          <Route path='/movieart' component={MovieArtNew} />
          <Route path='/raz' component={Paint1} />
          <Route path='/dwa' component={Paint2} />
          <Route path='/trzy' component={Paint3} />
          <Route path='/biocontact' component={BioNew} />
          {/* <Route path='/film' component={MovieBackground} /> */}
        </Switch>
        <Footer
          noFilmArt1Handler={this.noFilmArt1Handler}
          noFilmArt2Handler={this.noFilmArt2Handler}
          noFilmArt3Handler={this.noFilmArt3Handler}
          noFilmArt4Handler={this.noFilmArt4Handler}
          noFilmArt5Handler={this.noFilmArt5Handler}
        />
        {filmArt1Display}
        {filmArt2Display}
        {filmArt3Display}
        {filmArt4Display}
        {filmArt5Display}
      </BrowserRouter>
      </>  
  );
  }
  
}

export default App;
