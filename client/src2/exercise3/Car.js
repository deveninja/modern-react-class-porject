import React, { Component } from 'react'
import SearchBar from './components/SearchBar';
import ImageList from './components/ImageList';
import unsplash from './api/unsplash';
import './cars.css'

class Car extends Component {

  state = {
    images: []
  }

  onSearchSubmit = async(term) => {
    const res = (await unsplash.get('/search/photos', {params: {query: term}}))
    this.setState({images: res.data.results})
    console.log(res.data.results) 
  }

  totalImagesFound = () => {
    if(this.state.images.length){
      return <small>Found {this.state.images.length} images</small>
    }
  }

  render() {
    const {onSearchSubmit, totalImagesFound} = this
    return (
      <div className="ui container" style={{marginTop: '3rem'}}>
        <SearchBar onSearchSubmit={onSearchSubmit}/>
        {totalImagesFound()}
        <ImageList images={this.state.images}/>
      </div>
    )
  }
}

export default Car
 