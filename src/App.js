import React from 'react'

import HeaderSection from './components/layouts/HeaderSection'
import MainSection from './components/layouts/MainSection'
import FooterSection from './components/layouts/FooterSection'

const App = () => {
  return (
    <div className="ui container">
      <HeaderSection />
      <MainSection />
      <FooterSection />
    </div>
  )
}

export default App
