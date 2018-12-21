import React, { Component } from 'react'
import SearchBar from './components/SearchBar';
import ImageList from './components/ImageList';

class Car extends Component {

 

  onSearchSubmit = term => {
    console.log(term)
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
