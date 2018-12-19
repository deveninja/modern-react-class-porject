import React from 'react'
import ReactDOM from 'react-dom'
import SeasonDisplay from './exercise2/SeasonDisplay';
// import Components from './exercise1/Components'

const Root = () => {
  window.navigator.geolocation.getCurrentPosition(
    position => console.log(position),
    err => console.log(err)
  )
  return (
    <SeasonDisplay />
  )
}

ReactDOM.render(<Root />, document.getElementById('root'))