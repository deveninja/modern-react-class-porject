import React from 'react'
import ImageCard from './ImageCard';

const ImageList = (props) => {
  const imageGrid = props.images.map( image => {
    return (
      <ImageCard key={image.id} image={image} />
    )
  })
  return (
    <div className="image-grid">
      {imageGrid}
    </div>
  )
}

export default ImageList
