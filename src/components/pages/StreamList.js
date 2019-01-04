import React from 'react'
import {Route, Link} from 'react-router-dom'

import StreamCreate from '../pages/streams/StreamCreate'
import StreamEdit from '../pages/streams/StreamEdit'
import StreamShow from '../pages/streams/StreamShow'
import StreamDelete from '../pages/streams/StreamDelete'
// import pageCrudData from '../Theme/PageData/streamlistdata'

const List = ({match}) => {
  return (
    <div className="ui very relaxed horizontal list">
      {/* <div className="item">
        <div className="content">
          <Link to={ match.url + '/create'}> <button className="ui button orange">Create</button> </Link>
        </div>
      </div>
      <div className="item">
        <div className="content">
          <Link to={ match.url + '/delete'}> <button className="ui button orange">Delete</button> </Link>
        </div>
      </div>
      <div className="item">
        <div className="content">
          <Link to={ match.url + '/edit'}> <button className="ui button orange">Edit</button> </Link>
        </div>
      </div> */}
      <div className="ui buttons">
      <Link to={ match.url + '/create'}><button className="ui positive button">Create</button></Link>
      <Link to={ match.url + '/edit'}><button className="ui negative button">Delete</button></Link>
          <Link to={ match.url + '/delete'}><button className="ui orange button">Edit</button></Link>
      </div>
    </div>
  )
}

const renderCreatePage = props => {
  return <StreamCreate {...props} title="Hello Props" /> 
}

const StreamList = ({ match }) => {
  return (
    <div>
      <h3 
        style={{
            height: '20px !important',
            color: 'red !important',
            fontWeight: 'bolder'
        }}>
        Stream List
      </h3>
      <List match={match} />

      <Route 
        path={ match.url + '/create'} 
        render={renderCreatePage}
      />
      <Route path={ match.url + '/edit'} component={StreamEdit} />
      <Route path={ match.url + '/show'} component={StreamShow} />
      <Route path={ match.url + '/delete'} component={StreamDelete} />
    </div>
  )
}



export default StreamList
