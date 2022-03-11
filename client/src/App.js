import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Accounts from './Accounts'
import NotFound from './Not'
import Home from './Home'

class App extends Component {
  render () {
    return <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/accounts' element={<Accounts />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  }
}

export default App
