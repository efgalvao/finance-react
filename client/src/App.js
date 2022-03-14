import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Accounts from './pages/Accounts'
import Balances from './pages/balances/Balances'
import Categories from './pages/categories/Categories'
import NotFound from './pages/NotFound'
import Home from './pages/Home'
import Transactions from './pages/transactions/Transactions'
import Transferences from './pages/transferences/Transferences'
import Stocks from './pages/stocks/Stocks'
import Shares from './pages/shares/Shares'

class App extends Component {
  render () {
    return <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/accounts' element={<Accounts />} />
        <Route path='/categories' element={<Categories />} />
        <Route path='/balances' element={<Balances />} />
        <Route path='/transactions' element={<Transactions />} />
        <Route path='/transferences' element={<Transferences />} />
        <Route path='/stocks' element={<Stocks />} />
        <Route path='/shares' element={<Shares />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  }
}

export default App
