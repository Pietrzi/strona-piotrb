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
import Paint1 from './components/Paint1';
import Paint2 from './components/Paint2';
import Paint3 from './components/Paint3';
import BioContact from './components/BioContact';
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
import MovieDisplay from './components/MovieDisplay';
import MovieArtDisplay from './components/MovieArtDisplay';
import BioDisplay from './components/BioDisplay';
import MovieBackground from './components/MovieBackground';
import MovieArtBackground from './components/MovieArtBackground';



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
    filmArt4: false
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

  yesBioHandler = () => {
    this.setState({
      bioDisplay: true
    })
  }

  noBioHandler = () => {
    this.setState({
      bioDisplay: false
    })
  }

  yesFilm1Handler = () => {
    this.setState({
      film1: true
    })
  }

  noFilm1Handler = () => {
    this.setState({
      film1: false
    })
  }

  yesFilm2Handler = () => {
    this.setState({
      film2: true
    })
  }

  noFilm2Handler = () => {
    this.setState({
      film2: false
    })
  }

  yesFilm3Handler = () => {
    this.setState({
      film3: true
    })
  }

  noFilm3Handler = () => {
    this.setState({
      film3: false
    })
  }

  yesFilm4Handler = () => {
    this.setState({
      film4: true
    })
  }

  noFilm4Handler = () => {
    this.setState({
      film4: false
    })
  }

  yesFilm5Handler = () => {
    this.setState({
      film5: true
    })
  }

  noFilm5Handler = () => {
    this.setState({
      film5: false
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

  render() {
    let backdrop;
    if (this.state.sideMenu) {
      backdrop = <Backdrop click={this.backdropClickHandler}/>
    }
    let movieDisplay;
    if (this.state.movieDisplay) {
      movieDisplay = <MovieDisplay movieNoHandler={this.noForMovieHandler} film1YesHandler={this.yesFilm1Handler} film2YesHandler={this.yesFilm2Handler} film3YesHandler={this.yesFilm3Handler} film4YesHandler={this.yesFilm4Handler} film5YesHandler={this.yesFilm5Handler}/>
    }
    let movieArtDisplay;
    if (this.state.movieArtDisplay) {
      movieArtDisplay = <MovieArtDisplay movieArtNoHandler={this.noForMovieArtHandler} filmArt1YesHandler={this.yesFilmArt1Handler} filmArt2YesHandler={this.yesFilmArt2Handler} filmArt3YesHandler={this.yesFilmArt3Handler} filmArt4YesHandler={this.yesFilmArt4Handler}/>
    }
    let bioDisplay;
    if (this.state.bioDisplay) {
      bioDisplay = <BioDisplay/>
    }

    let film1Display;
    if (this.state.film1) {
      film1Display = <Film1 movieYesHandler={this.yesForMovieHandler} noFilm1Handler={this.noFilm1Handler}/>
    }

    let film2Display;
    if (this.state.film2) {
      film2Display = <Film2 movieYesHandler={this.yesForMovieHandler} noFilm2Handler={this.noFilm2Handler}/>
    }

    let film3Display;
    if (this.state.film3) {
      film3Display = <Film3 movieYesHandler={this.yesForMovieHandler} noFilm3Handler={this.noFilm3Handler}/>
    }

    let film4Display;
    if (this.state.film4) {
      film4Display = <Film4 movieYesHandler={this.yesForMovieHandler} noFilm4Handler={this.noFilm4Handler}/>
    }

    let film5Display;
    if (this.state.film5) {
      film5Display = <Film5 movieYesHandler={this.yesForMovieHandler} noFilm5Handler={this.noFilm5Handler}/>
    }

    let filmArt1Display;
    if (this.state.filmArt1) {
      filmArt1Display = <FilmArt1 movieArtYesHandler={this.yesForMovieArtHandler} noFilmArt1Handler={this.noFilmArt1Handler}/>
    }

    let filmArt2Display;
    if (this.state.filmArt2) {
      filmArt2Display = <FilmArt2 movieArtYesHandler={this.yesForMovieArtHandler} noFilmArt2Handler={this.noFilmArt2Handler}/>
    }

    let filmArt3Display;
    if (this.state.filmArt3) {
      filmArt3Display = <FilmArt3 movieArtYesHandler={this.yesForMovieArtHandler} noFilmArt3Handler={this.noFilmArt3Handler}/>
    }

    let filmArt4Display;
    if (this.state.filmArt4) {
      filmArt4Display = <FilmArt4 movieArtYesHandler={this.yesForMovieArtHandler} noFilmArt4Handler={this.noFilmArt4Handler}/>
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
          yesBioHandler={this.yesBioHandler}
          noBioHandler={this.noBioHandler}
          menuHandler={this.sideMenuClickHandler}
          noFilm1Handler={this.noFilm1Handler}
          noFilm2Handler={this.noFilm2Handler}
          noFilm3Handler={this.noFilm3Handler}
          noFilm4Handler={this.noFilm4Handler}
          noFilm5Handler={this.noFilm5Handler}
          noFilmArt1Handler={this.noFilmArt1Handler}
          noFilmArt2Handler={this.noFilmArt2Handler}
          noFilmArt3Handler={this.noFilmArt3Handler}
          noFilmArt4Handler={this.noFilmArt4Handler}

          />
        <SideMenu 
          show={this.state.sideMenu}
          movieYesHandler={this.yesForMovieHandler}
          movieNoHandler={this.noForMovieHandler}
          movieArtYesHandler={this.yesForMovieArtHandler}
          movieArtNoHandler={this.noForMovieArtHandler}
          yesBioHandler={this.yesBioHandler}
          noBioHandler={this.noBioHandler}
          noFilm1Handler={this.noFilm1Handler}
          noFilm2Handler={this.noFilm2Handler}
          noFilm3Handler={this.noFilm3Handler}
          noFilm4Handler={this.noFilm4Handler}
          noFilm5Handler={this.noFilm5Handler}
          noFilmArt1Handler={this.noFilmArt1Handler}
          noFilmArt2Handler={this.noFilmArt2Handler}
          noFilmArt3Handler={this.noFilmArt3Handler}
          noFilmArt4Handler={this.noFilmArt4Handler}
        />
        <Switch>
          <Route exact path='/' component={Main} />
          <Route path='/movie' component={Movie} />
          <Route path='/movieart' component={MovieArt} />
          <Route path='/raz' component={Paint1} />
          <Route path='/dwa' component={Paint2} />
          <Route path='/trzy' component={Paint3} />
          <Route path='/biocontact' component={BioContact} />
          <Route path='/film' component={MovieBackground} />
          <Route path='/filmart' component={MovieArtBackground} />
          {/* <Route path='/filmart1' render={(props) => <FilmArt1 {...props} movieArtYesHandler={this.yesForMovieArtHandler}/>}></Route>
          <Route path='/filmart2' render={(props) => <FilmArt2 {...props} movieArtYesHandler={this.yesForMovieArtHandler}/>}></Route> */}
        </Switch>
        <Footer
          movieNoHandler={this.noForMovieHandler}
          movieArtNoHandler={this.noForMovieArtHandler}
          yesBioHandler={this.yesBioHandler}
          noBioHandler={this.noBioHandler}
          noFilm1Handler={this.noFilm1Handler}
          noFilm2Handler={this.noFilm2Handler}
          noFilm3Handler={this.noFilm3Handler}
          noFilm4Handler={this.noFilm4Handler}
          noFilm5Handler={this.noFilm5Handler}
          noFilmArt1Handler={this.noFilmArt1Handler}
          noFilmArt2Handler={this.noFilmArt2Handler}
          noFilmArt3Handler={this.noFilmArt3Handler}
          noFilmArt4Handler={this.noFilmArt4Handler}
        />
        {movieDisplay}
        {movieArtDisplay}
        {film1Display}
        {film2Display}
        {film3Display}
        {film4Display}
        {film5Display}
        {filmArt1Display}
        {filmArt2Display}
        {filmArt3Display}
        {filmArt4Display}
      </HashRouter>
      {bioDisplay}
      </>  
  );
  }
  
}

export default App;
