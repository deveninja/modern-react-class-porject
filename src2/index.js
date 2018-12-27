import React from 'react'
import ReactDOM from 'react-dom'
// import Video from './exercise4/components/Video';
// import SeasonDisplay from './exercise2/SeasonDisplayController'
// import Components from './exercise1/Components'
// import './exercise2/app.css'
// import Car from './exercise3/Car';
import store from './exercise5/store'
import { Provider } from 'react-redux'
import PostList from './exercise5/components/PostList';

const Root = () => {
  return (
    <div className="ui container">
      <PostList />
    </div>
  )
}

ReactDOM.render(
  <Provider store={store}>
    <Root />
  </Provider>, 
document.getElementById('root'))