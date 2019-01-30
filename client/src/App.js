import React from 'react'
import './app.css'

import HeaderSection from './components/layouts/HeaderSection'
import MainSection from './components/layouts/MainSection'
import FooterSection from './components/layouts/FooterSection'

const App = () => {
  return (
    <React.Fragment>
      
      <HeaderSection />

      <div className="" style={{width: '90%', margin: '0 auto'}}>
        <MainSection />
      </div>

      <FooterSection />

    </React.Fragment>

  )
}

export default App
