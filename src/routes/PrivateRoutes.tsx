import React from 'react'
import { useSelector } from 'react-redux'
import { Link, Route, Routes } from 'react-router-dom'
import BillsList from '../components/BillsList'
import ProductForm from '../components/ProductForm'
import ProductList from '../components/ProductList'
import SellingForm from '../components/SellingForm'
import StockistForm from '../components/StockistForm'
import StockistsList from '../components/StockistsList'
import GoogleLogIn from '../state/slice/GoogleLoging'
import LogIn from '../state/slice/Login'
import SignIn from '../state/slice/Signin'
import { stateType } from '../state/Store'


function PrivateRoutes() {

  const {user} = useSelector((state:stateType) => state.log)


  return (
    <div>
      {user !== null ? 
      <nav>
        <Link to='/'> Create Stockist--  </Link> 
        <Link to='/stockists'>  Stockists--  </Link> 
        <Link to="/createProduct"> Create Product--  </Link>
        <Link to='/productList'>Products--  </Link>
        <Link to='/sellProduct'>Sell Product--  </Link>
        <Link to='/getAllBills'>Check all bills--</Link>
      </nav>:
      <nav>
        <Link to="/logIn" className="nav-item nav-link active" >Log in</Link>
        <Link to="/logInGoogle" className="nav-item nav-link active">Log in with google</Link>
        <Link to="/signIn" className="nav-item nav-link active">Sign in</Link>
      </nav>
    }
        <Routes>
            <Route path="/" element={<StockistForm/>} />
            <Route path="/stockists" element={<StockistsList />} />
            <Route path="/createProduct" element={<ProductForm />} />
            <Route path="/productList" element={<ProductList />} />
            <Route path="/sellProduct" element={<SellingForm/>} />
            <Route path="/getAllBills" element={< BillsList />} />
            <Route path="/logIn" element={<LogIn/>} />
            <Route path="/logInGoogle" element={<GoogleLogIn/>} />
            <Route path="/signIn" element={<SignIn/>} />
        </Routes>
    </div>
  )
}

export default PrivateRoutes