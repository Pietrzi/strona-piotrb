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
import FilmArt1 from './components/FilmArt1';
import FilmArt2 from './components/FilmArt2';
import MovieDisplay from './components/MovieDisplay';
import MovieArtDisplay from './components/MovieArtDisplay';
import BioDisplay from './components/BioDisplay';



class App extends React.Component {
  state = {
    sideMenu: false,
    movieDisplay: false,
    movieArtDisplay: false,
    bioDisplay: false
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
    let bioDisplay;
    if (this.state.bioDisplay) {
      bioDisplay = <BioDisplay/>
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
          />
        <SideMenu 
          show={this.state.sideMenu}
          movieYesHandler={this.yesForMovieHandler}
          movieNoHandler={this.noForMovieHandler}
          movieArtYesHandler={this.yesForMovieArtHandler}
          movieArtNoHandler={this.noForMovieArtHandler}
          yesBioHandler={this.yesBioHandler}
          noBioHandler={this.noBioHandler}
        />
        <Switch>
          <Route exact path='/' component={Main} />
          <Route path='/movie' component={Movie} />
          <Route path='/movieart' component={MovieArt} />
          <Route path='/raz' component={Paint1} />
          <Route path='/dwa' component={Paint2} />
          <Route path='/trzy' component={Paint3} />
          <Route path='/biocontact' component={BioContact} />
          <Route path='/film1' render={(props) => <Film1 {...props} movieYesHandler={this.yesForMovieHandler}/>}></Route>
          <Route path='/film2' render={(props) => <Film2 {...props} movieYesHandler={this.yesForMovieHandler}/>}></Route>
          <Route path='/filmart1' render={(props) => <FilmArt1 {...props} movieArtYesHandler={this.yesForMovieArtHandler}/>}></Route>
          <Route path='/filmart2' render={(props) => <FilmArt2 {...props} movieArtYesHandler={this.yesForMovieArtHandler}/>}></Route>
        </Switch>
        <Footer
          movieNoHandler={this.noForMovieHandler}
          movieArtNoHandler={this.noForMovieArtHandler}
          yesBioHandler={this.yesBioHandler}
          noBioHandler={this.noBioHandler}
        />
        {movieDisplay}
        {movieArtDisplay}
      </HashRouter>
      {bioDisplay}
      </>  
  );
  }
  
}

export default App;
