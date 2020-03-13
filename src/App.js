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
import Backdrop from './components/Backdrop';
import SideMenu from './components/SideMenu';
import Film1 from './components/Film1';
import Film2 from './components/Film2';
import MovieDisplay from './components/MovieDisplay';
import MovieArtDisplay from './components/MovieDisplay';



class App extends React.Component {
  state = {
    sideMenu: false,
    movieDisplay: false,
    movieArtDisplay: false
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

  yesForMovieHandler = () => {
    this.setState({
      movieDisplay: true
    })
  }

  noForMovieHandler = () => {
    this.setState({
      movieDisplay: false
    })
  }

  yesForMovieArtHandler = () => {
    this.setState({
      movieArtDisplay: true
    })
  }

  noForMovieArtHandler = () => {
    this.setState({
      movieArtDisplay: false
    })
  }

  render() {
    let backdrop;
    if (this.state.sideMenu) {
      backdrop = <Backdrop click={this.backdropClickHandler}/>
    }
    let movieDisplay;
    if (this.state.movieDisplay) {
      movieDisplay = <MovieDisplay movieNoHandler={this.noForMovieHandler}/>
    }
    let movieArtDisplay;
    if (this.state.movieArtDisplay) {
      movieArtDisplay = <MovieArtDisplay movieArtNoHandler={this.noForMovieArtHandler}/>
    }
    return (
      <>
      {backdrop}
      <HashRouter>
        <Navbar 
          movieYesHandler={this.yesForMovieHandler}
          movieNoHandler={this.noForMovieHandler}
          movieArtYesHandler={this.yesForMovieArtHandler}
          movieArtNoHandler={this.noForMovieArtHandler}
          menuHandler={this.sideMenuClickHandler}
          />
        <SideMenu show={this.state.sideMenu}/>
        <Switch>
          <Route exact path='/' component={Main} />
          <Route path='/movie' component={Movie} />
          <Route path='/movieart' component={MovieArt} />
          <Route path='/paint' component={Paint} />
          <Route path='/biocontact' component={BioContact} />
          <Route path='/film1' component={Film1} />
          <Route path='/film2' component={Film2} />
        </Switch>
        <Footer
          movieNoHandler={this.noForMovieHandler}
          movieArtNoHandler={this.noForMovieArtHandler}
        />
        {movieDisplay}
        {movieArtDisplay}
      </HashRouter>
      </>  
  );
  }
  
}

export default App;
