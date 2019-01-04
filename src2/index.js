import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

// import Video from './exercise4/components/Video';
// import SeasonDisplay from './exercise2/SeasonDisplayController'
// import Components from './exercise1/Components'
// import './exercise2/app.css'
import Car from './exercise3/Car';
// import PostList from './exercise5/components/PostList'
import store from './exercise5/store'


const Root = () => {
  return (
    <div className="ui container">
      <Car />
    </div>
  )
}

ReactDOM.render(
  <Provider store={store}>
    <Root />
  </Provider>, 
document.getElementById('root'))