import React, { Component } from 'react'
import {Route, Link} from 'react-router-dom'
import { connect } from 'react-redux'

import StreamCreate from '../pages/streams/StreamCreate'
import StreamEdit from '../pages/streams/StreamEdit'
import StreamShow from '../pages/streams/StreamShow'
import StreamDelete from '../pages/streams/StreamDelete'
import { fetchStreams } from '../../actions'


class StreamList extends Component {

  componentDidMount() {
    this.props.fetchStreams()
  }

  renderStreamList = () => {
    return this.props.streams.map(stream => {
      return (
        <div className="item" key={stream.id}>
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

  List = () => {
    return (
      <div className="ui very relaxed horizontal list">
        <div className="ui buttons">
        <Link to={ this.props.match.url + '/create'}><button className="ui positive button">Create</button></Link>
        <Link to={ this.props.match.url + '/edit'}><button className="ui negative button">Delete</button></Link>
        <Link to={ this.props.match.url + '/delete'}><button className="ui orange button">Edit</button></Link>
        </div>
      </div>
    )
  }

  render(){
    return (
      <div>
        <h1>Stream List</h1>

          { this.List() }
          
          <div className="ui celled list">
            { this.renderStreamList() }
          </div>
        


        <Route 
          path={ this.props.match.url + '/create'} 
          render={() => this.renderCreatePage()}
        />
        <Route path={ this.props.match.url + '/edit'} component={StreamEdit} />
        <Route path={ this.props.match.url + '/show'} component={StreamShow} />
        <Route path={ this.props.match.url + '/delete'} component={StreamDelete} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    streams: Object.values(state.streams)
  }
}


export default connect(mapStateToProps, { fetchStreams })(StreamList)
