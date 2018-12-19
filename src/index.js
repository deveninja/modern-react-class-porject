import React from 'react'
import ReactDOM from 'react-dom'
import SeasonDisplay from './exercise2/SeasonDisplay';
// import Components from './exercise1/Components'

const Root = () => {
  return (
    <SeasonDisplay />
  )
}

ReactDOM.render(<Root />, document.getElementById('root'))