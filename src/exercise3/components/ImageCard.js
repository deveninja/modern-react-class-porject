import React, { Component } from 'react'

class ImageCard extends Component {

  constructor(props){
    super(props)
    this.imageRef = React.createRef()
    this.state = {
      spans: 0,
      variance: 0
    }
  }

  componentDidMount(){
    this.imageRef.current.addEventListener('load', this.setSpans)
  }

  setSpans = () => {
    const height = this.imageRef.current.clientHeight
    const variance = (height % 10)
    const spans = Math.ceil(height / 5) + 1
    this.setState({spans: spans, variance: variance})
  }

  render() {
    const { description, urls } = this.props.image
    return (
      <div style={{gridRowEnd: `span ${this.state.spans}`}}>
        <img ref={this.imageRef} src={urls.small} alt={description} />
      </div>
    )
  }
}

export default ImageCard
