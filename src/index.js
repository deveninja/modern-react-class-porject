import React from 'react'
import ReactDOM from 'react-dom'
// import SeasonDisplay from './exercise2/SeasonDisplayController'
// import Components from './exercise1/Components'
// import './exercise2/app.css'
import Car from './exercise3/Car';

const Root = () => {
  return (
    <Car />
  )
}

ReactDOM.render(<Root />, document.getElementById('root'))