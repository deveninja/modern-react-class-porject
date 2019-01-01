import React from 'react'
import {Route, Link} from 'react-router-dom'

import StreamCreate from '../pages/streams/StreamCreate'
import StreamEdit from '../pages/streams/StreamEdit'
import StreamShow from '../pages/streams/StreamShow'
import StreamDelete from '../pages/streams/StreamDelete'
// import pageCrudData from '../Theme/PageData/streamlistdata'

const List = ({match}) => {
  return (
    <div>
      <Link to={ match.url + '/create'}>Create new Stream</Link>
      <br/>
      <Link to={ match.url + '/delete'}>Delete Stream</Link>
      <br/>
      <Link to={ match.url + '/edit'}>Edit Stream</Link>
    </div>
  )
}

const StreamList = ({ match }) => {
  return (
    <div>
      <h3>Stream List</h3>
      <Route path={ match.url + '/create'} component={StreamCreate} />
      <Route path={ match.url + '/edit'} component={StreamEdit} />
      <Route path={ match.url + '/show'} component={StreamShow} />
      <Route path={ match.url + '/delete'} component={StreamDelete} />
      <List match={match} />
    </div>
  )
}



export default StreamList
