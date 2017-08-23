import React, { Component } from 'react';
import StatefulAlbums from './StatefulAlbums';
import SingleAlbum from './SingleAlbum';
import Sidebar from './Sidebar';
import Player from './Player';
import AllArtists from './AllArtists'; 
import SingleArtist from './SingleArtist'; 
import {HashRouter, Switch, Route} from 'react-router-dom';

export default class Main extends Component {

  constructor () {
    super();
    this.state = {
      albums: []

    };
  }


  render () {
    return (
      <div id="main" className="container-fluid">


    <HashRouter>
      <div>
        <div className="col-xs-2">
          <Sidebar  />
        </div>
      <Switch>
      <div>
        <div className="col-xs-10">
              <Route
                exact
                path='/'
                component={StatefulAlbums}
              />
              <Route
                exact
                path='/albums'
                component={StatefulAlbums}
                /> 
              <Route
                exact
                path='/albums/:albumId'
                component={SingleAlbum}
              />
              <Route
                exact
                path='/artists'
                component={AllArtists}
              />
              <Route
                exact
                path='/artists/:artistId'
                component={SingleArtist}
              />
        </div>
      </div>
      </Switch>
      </div>
    </HashRouter>


        <Player />
      </div>
    );
  }
}
