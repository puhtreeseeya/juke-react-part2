import React, { Component } from 'react';
import Songs from '../components/Songs';
import AllAlbums from './AllAlbums'
import axios from 'axios';
import {HashRouter, NavLink, Link, Switch, Route} from 'react-router-dom';

export default class SingleArtist extends Component {
	constructor(){
		super()
		this.state = {
			selectedArtist: {},
			artistAlbums: [],
			artistSongs : []
		}
	}

	componentDidMount () {
  	const artistId = this.props.match.params.artistId;

   	var p1 = axios.get(`/api/artists/${artistId}`)
    .then(res => res.data)

    var p2 = axios.get(`/api/artists/${artistId}/albums`)
    .then(res => res.data)

  	var p3 = axios.get(`/api/artists/${artistId}/songs`)
  	.then(res => res.data)

  	Promise.all([p1, p2, p3])
  	.then(values => {
  		this.setState({
  			selectedArtist: values[0],
  			artistAlbums: values[1],
  			artistSongs: values[2]
  		})
  	})


	}

	render() {
    const artist = this.state.selectedArtist; // or however you've named it
    return (
      <div>
        <h3>{ artist.name }</h3>
        <ul className="nav nav-tabs">
          <li><NavLink to={`/artists/${artist.id}/albums`} activeClassName='active'>ALBUMS</NavLink></li>
          <li><NavLink to={`/artists/${artist.id}/songs`}>SONGS</NavLink></li>
        </ul>

      <HashRouter>
        <Switch>
          <Route
            exact
            path='/artists/:artistId/albums'
            render={()=> <AllAlbums albums={this.state.artistAlbums} />}
          />
          <Route
            exact
            path='/artists/:artistId/songs'
            render={()=> <Songs songs={this.state.artistSongs} />}
          />


        </Switch>
      </HashRouter>
      </div>
    )
		// {return (
		// 	<div>
		// 	  <h3>{this.state.selectedArtist.name}</h3>
		// 	  <AllAlbums albums={this.state.artistAlbums}/>
		// 	  <Songs songs={this.state.artistSongs} />
		// 	</div>
		// )}
	}

}
