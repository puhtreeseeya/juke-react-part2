import React, { Component } from 'react';
import Songs from '../components/Songs';
import axios from 'axios';

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
		console.log("HELLO", this.state); 
		return (
			<div>
			  <h3>{this.state.selectedArtist.name}</h3>
			  <h4>ALBUMS</h4>
			  <h4>SONGS</h4>
			  <Songs songs={this.state.artistSongs} /> 
			</div>
		) 
	}

}