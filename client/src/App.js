import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Accounts from './pages/Accounts'
import NotFound from './pages/NotFound'
import Home from './pages/Home'

class App extends Component {
  render () {
    return <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/accounts' element={<Accounts />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  }
}

export default App
