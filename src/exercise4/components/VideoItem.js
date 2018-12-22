import React from 'react'
import './video-item.css'

const VideoItem = ({video, onVideoSelect}) => {
 
  const { snippet } = video
 
  return (
    <div onClick={() => onVideoSelect(video)} className="item video-item">
      <img className="ui image" src={snippet.thumbnails.medium.url} alt={snippet.title} />
      <div className="content">
        <div className="header">
          <span>{snippet.title}</span>
        </div>
      </div>
    </div>
  )
}

export default VideoItem

