import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import getProducts from '../actions/get/GetProducts'
import { getAllProducts, productType } from '../state/slice/ProductSlice'
import {store} from '../state/Store'


const ProductList = () => {

    const dispatch = useDispatch()

    const getProductInfo = useSelector((state:store) => state.product)

    useEffect(() => {
      getProducts().then(
        (prod)=>{
          dispatch( getAllProducts(prod))
        }
      )
    }, [])

  return (
    <div>
      <h1>List of all products</h1>
      <ul>
        {getProductInfo.map((prod:productType, index) => 
        <li key={index}>
          {prod.productId} {prod.productName} {prod.price} {prod.description} {prod.minProdAmount} {prod.maxProdAmount} {prod.unitsAvailable} {prod.stockistName}
        </li>)}
      </ul>
    </div>
  )
}

export default ProductList