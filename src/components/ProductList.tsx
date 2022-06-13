import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import delProduct from '../actions/delete/DeleteProduct'
import getProducts from '../actions/get/GetProducts'
import { deleteProduct, getAllProducts, productType } from '../state/slice/ProductSlice'
import store from '../state/Store'


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

    const handleProdDel = async(id:string) => {
      const response = await delProduct(id)
      if(response.productDeleted){
        dispatch(deleteProduct(id))
      }
    }


  return (
    <div>
      <h1>List of all products</h1>
      <ul>
        {getProductInfo.map((prod:productType, index) => 
        <li key={index}>
          {prod.productId} {prod.productName} {prod.price} {prod.description} {prod.minProdAmount} {prod.maxProdAmount} {prod.unitsAvailable} {prod.stockistName}
          <button onClick={()=>handleProdDel(prod.productId)} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded'>Delete product</button>
        </li>)}
      </ul>
    </div>
  )
}

export default ProductList