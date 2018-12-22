import React from 'react'

const VideoDetail = ({video}) => {
  if(!video){
    return(
      <div>
        <p>Loading</p>
      </div>
    )
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`

  return (
    <div>
      <div className="ui embed">
        <iframe src={videoSrc} frameBorder="0" allowFullScreen="allowfullscreen" title="Video Player"></iframe>
      </div>
      <div className="ui segment">
        <h5 className="ui header">{video.snippet.title}</h5>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  )
}

export default VideoDetail

