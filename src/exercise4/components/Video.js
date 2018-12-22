import React, { Component } from 'react'
import SearchBar from './SearchBar';
import VideoDetail from './VideoDetail';
import VideoList from './VideoList';
import youtube from '../api/youtube';

class Video extends Component {

  state = {
    videoSnippets: [],
    nextPageToken: '',
    totalVideoSnippets: '',
    videoSelected: null,
    searchQuery: ''
  }

  componentDidMount() {
    this.onSearchSubmit('dragon ball super')
  }

  onSearchSubmit = async term => {
    const res = await youtube.get('/search', {params: {q: term}})
    this.setState({
      videoSnippets: res.data.items,
      nextPageToken: res.data.nextPageToken,
      totalVideoSnippets: res.data.pageInfo.totalResults,
      searchQuery: term,
      videoSelected: res.data.items[0]
    })
    // console.log(res.data.items) 
  }

  totalVideosFound = () => {
    if(this.state.videoSnippets.length){
      return <small>Page {this.state.videoSnippets.length} of {this.state.totalVideoSnippets} videos about {this.state.searchQuery}</small>
    }
  }

  onVideoSelect = video => {
    this.setState({
      videoSelected: video
    })
  }

  render() {
    return (
      <div className="ui container" style={{paddingTop: '3rem', display: 'sticky', top: '0'}}>
        <SearchBar onFormSubmit={this.onSearchSubmit} />
        {/* {this.totalVideosFound()} */}
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.videoSelected}/>
            </div>
            <div className="five wide column">
              <VideoList videoSnippets={this.state.videoSnippets} onVideoSelect={this.onVideoSelect} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Video
