import React from 'react'
import VideoItem from './VideoItem';

const VideoList = ({videoSnippets, onVideoSelect}) => {

  const videoItems = videoSnippets.map(videoSnippet => {
    return <VideoItem key={videoSnippet.id.videoId} video={videoSnippet} onVideoSelect={onVideoSelect}/>
  })

  return (
    <div className="ui relaxed divided list" style={{maxHeight: '600px', overflow: 'auto'}}>
      {videoItems}
    </div>
  )
}

export default VideoList

