import React, { Component } from 'react'
import axios from 'axios'
import SearchBar from './components/SearchBar';
import ImageList from './components/ImageList';

class Car extends Component {

  onSearchSubmit = term => {
    axios.get('https://api.unsplash.com/search/photos', {
      params: {
        query: term
      },
      headers: {
        Authorization: 'Client-ID 5ccbba43934098218e628c4d0dc31c5b3cf53fedb890a6ba0c2bed205b40b5e9',

      }
    })
    .then(res => console.log(res))
  }

  render() {
    return (
      <div className="ui container" style={{marginTop: '3rem'}}>
        <SearchBar onSearchSubmit={this.onSearchSubmit}/>
        <ImageList />
      </div>
    )
  }
}

export default Car
 