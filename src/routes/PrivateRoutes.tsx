import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import ProductForm from '../components/ProductForm'
import ProductList from '../components/ProductList'
import SellingForm from '../components/SellingForm'
import StockistForm from '../components/StockistForm'
import StockistsList from '../components/StockistsList'


function PrivateRoutes() {
  return (
    <div>
        <Link to='/'> Create Stockist--  </Link> 
        <Link to='/stockists'>  Stockists--  </Link> 
        <Link to="/createProduct"> Create Product--  </Link>
        <Link to='/productList'>Products--  </Link>
        <Link to='/sellProduct'>Sell Product--  </Link>

        <Routes>
            <Route path="/" element={<StockistForm/>} />
            <Route path="/stockists" element={<StockistsList />} />
            <Route path="/createProduct" element={<ProductForm />} />
            <Route path="/productList" element={<ProductList />} />
            <Route path="/sellProduct" element={<SellingForm/>} />
        </Routes>
    </div>
  )
}

export default PrivateRoutes