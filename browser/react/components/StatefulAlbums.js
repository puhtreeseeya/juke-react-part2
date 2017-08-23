import React, { Component } from 'react';
import Songs from '../components/Songs';
import AllAlbums from '../components/AllAlbums'; 
import axios from 'axios';

export default class StatefulAlbums extends Component {
	constructor() {
    super()
    this.state = {
      albums : []
    }
	}

	componentDidMount () {
    axios.get('/api/albums/')
      .then(res => res.data)
      .then(albums => {
        this.setState({ albums })
      });
  }

  render() {
  	return (
  		<AllAlbums albums={this.state.albums}/> 
  	)
  }


}