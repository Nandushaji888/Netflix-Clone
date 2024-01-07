import React from 'react'
import NavBar from './components/NavBar/NavBar'
import Banner from './components/Banner/Banner'
import './App.css'
import RowPost from './components/RowPost/RowPost'
import {orginals, action,horror,trending,romance,comedy} from './urls'

function App() {
  return (
    <div >
      <NavBar/>
      <Banner/>
      <RowPost url={orginals} title='Netflix Orginals' />
      <RowPost url={action} title='Action' isSmall />
      <RowPost url={horror} title='Horror Movies' isSmall />
      <RowPost url={trending} title='Trending' isSmall /> 
      <RowPost url={romance} title='Romance Movies' isSmall />
      <RowPost url={comedy} title='Comedy Movies' isSmall />
    </div>
  )
}


export default App
