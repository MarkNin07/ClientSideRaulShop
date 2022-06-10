import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import StockistForm from '../components/StockistForm'
import StockistsList from '../components/StockistsList'

type Props = {}

function PrivateRoutes({}: Props) {
  return (
    <div>
        <Link to='/'> CreateStockist </Link> 
        <Link to='/stockists'>  Stockists </Link> 

        <Routes>
            <Route path="/" element={<StockistForm/>} />
            <Route path="/stockists" element={<StockistsList />} />
        </Routes>
    </div>
  )
}

export default PrivateRoutes