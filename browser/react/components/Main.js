import React, { Component } from 'react';
import AllAlbums from './AllAlbums';
import SingleAlbum from './SingleAlbum';
import Sidebar from './Sidebar';
import Player from './Player';
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
                component={AllAlbums}
              />
              <Route
                exact
                path='/albums'
                component={AllAlbums}
              />
              <Route
                exact
                path='/albums/:albumId'
                component={SingleAlbum}
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
