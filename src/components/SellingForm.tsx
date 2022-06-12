import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Select from 'react-select'
import postBill from '../actions/post/PostBill'
import store from '../state/Store'

const SellingForm = () => {

    const dispatch = useDispatch()

    const getProductInfo = useSelector((state:store) => state.product)

    const [productName, setProductName] = useState('');
    const [date, setDate] = useState('');
    const [clientName, setClientName] = useState('');
    const [salesPerson, setSalesPerson] = useState('');
    const [price, setPrice] = useState(0);

    const handlePrice = (ev:any) => {
        setProductName(ev.label);  
        setPrice(ev.value)
    }

    const generateBill = (e:React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        postBill(productName, date, clientName, salesPerson, price, dispatch)
        setProductName(''),
        setDate(''),
        setClientName(''),
        setSalesPerson(''),
        setPrice(0)
    }

 

  return (
    <form  className="mt-8 space-y-6" action="#" method="POST">
        <h1>Choose the product to sell</h1>
        <div>
            Product 1: 
            <Select 
                options={getProductInfo.map(prod => 
                ({label:prod.productName, value:prod.price}))} onChange={(ev) => handlePrice(ev)}/> 
        </div>
        <label htmlFor="billDate">Date: </label>
        <input type="text" value={date} 
            onChange={(e) => setDate(e.target.value)}
            className='border-2 border-blue-500 rounded-md'/> <br/>

        <label htmlFor="billDate">Client Name: </label>
        <input type="text" name="clientName" 
            value={clientName} onChange={(e)=> setClientName(e.target.value)} 
            className='border-2 border-blue-500 rounded-md'/> <br />

        <label htmlFor="billDate">Salesperson name: </label>
        <input type="text" name="salesPerson" 
            value={salesPerson} onChange={(e)=> setSalesPerson(e.target.value)} 
            className='border-2 border-blue-500 rounded-md'/> <br />

        <label htmlFor="price"> Price: </label>
        <input type="text" name="price" value={price} readOnly
            className='border-2 border-blue-500 rounded-md' /> <br/>

        <button onClick={generateBill} className="bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Generate Bill</button>
     
    </form>

  )
}

export default SellingForm