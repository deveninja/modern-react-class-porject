import React, { Component, Fragment } from 'react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'

import StreamCreate from '../pages/streams/StreamCreate'
// import StreamEdit from '../pages/streams/StreamEdit'
// import StreamShow from '../pages/streams/StreamShow'
// import StreamDelete from '../pages/streams/StreamDelete'
import { fetchStreams } from '../../actions'


class StreamList extends Component {

  componentDidMount() {
    this.props.fetchStreams()
  }

  renderAdminButtons = (stream) => {    
    if(stream.userInfo === this.props.currentUserInfo) {
      return (
        <div className="right floated content">
          <Link to={`${this.props.match.url}/edit`}><button className="ui button primary">Edit</button></Link>
          <Link to={`${this.props.match.url}/delete`}><button className="ui button negative">Delete</button></Link>
        </div>
      )
    }
  }

  renderCreateButton = () => {
    if(this.props.isSignedIn){
      return (
        <Fragment>
          <Link to={`${this.props.match.url}/create`} className="ui button positive">
            Create Stream
          </Link>
        </Fragment>
      )
    }
  }

  renderStreamList = () => {
    return this.props.streams.map(stream => {
      return (
        <div className="item" key={stream.id}>
        
          {this.renderAdminButtons(stream)}

          <i className="large middle aligned icon cog" />
          <div className="content">
            <span style={{fontWeight: 'bolder', fontSize: '1.1rem'}}>

              {stream.title}

            </span>

            <div className="description">

              {stream.description}
              
            </div>
          </div>
        </div>
      )
    })
  }

  renderCreatePage = () => {
    return <StreamCreate /> 
  }


  render(){
    return (
      <React.Fragment>
       
        <div style={{textAlign: 'left', padding: '0 .5em'}}>
          <h1>Stream List</h1>
        </div>

        <div style={{textAlign: 'right', padding: '0 .5em'}}>
          {this.renderCreateButton()}
        </div>
        

        <div className="ui celled list">
          { this.renderStreamList() }
        </div>

      </React.Fragment>
      
    )
  }
}

const mapStateToProps = (state) => {
  return {
    streams: Object.values(state.streams),
    currentUserInfo: state.auth.userInfo,
    isSignedIn: state.auth.isSignedIn
  }
}


export default connect(mapStateToProps, { fetchStreams })(StreamList)
