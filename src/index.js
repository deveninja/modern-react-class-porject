import React from 'react'
import ReactDOM from 'react-dom'
import SeasonDisplay from './exercise2/SeasonDisplayController'
// import Components from './exercise1/Components'
import './exercise2/app.css'

const Root = () => {
  return (
    <SeasonDisplay />
  )
}

ReactDOM.render(<Root />, document.getElementById('root'))