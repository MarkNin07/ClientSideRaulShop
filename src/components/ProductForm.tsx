import * as React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postProduct } from '../actions/post/PostProduct';

const ProductForm = () => {

    const dispatch = useDispatch()

    const [productName, setProductName] = useState<string>('');
    const onChangeProdName = (e:React.ChangeEvent<HTMLInputElement>) => 
        setProductName(e.target.value)
    
    const [price, setPrice] = useState<number>(0);   

    const [description, setDescription] = useState<string>('');
    const onChangeDescription = (e:React.ChangeEvent<HTMLInputElement>) =>
        setDescription(e.target.value)

    const [minProdAmount, setMinProdAmount] = useState<number>(0);

    const [maxProdAmount, setMaxProdAmount] = useState<number>(0);

    const [unitsAvailable, setUnitsAvailable] = useState<number>(0);

    const [stockistName, setStockistName] = useState<string>('');
    const onChangestockistName = (e:React.ChangeEvent<HTMLInputElement>) =>
        setStockistName(e.target.value)


    const createProd = (e:React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        postProduct(productName, price, description, minProdAmount, maxProdAmount, unitsAvailable, stockistName, dispatch)
        setProductName('')
        setPrice(0)
        setDescription('')
        setMinProdAmount(0)
        setMaxProdAmount(0)
        setUnitsAvailable(0)
        setStockistName('')

    }

  return (
      <form  className="mt-8 space-y-6" action="#" method="POST">

          <label htmlFor="productName" >Product Name:</label>
          <input type="text" name="productName" 
            value={productName} onChange={onChangeProdName} 
            className='border-2 border-blue-500 rounded-md'/> <br />

          <label htmlFor="price">Price:</label>
          <input type="number" name="price"
            value={price} onChange={ (e) => setPrice(parseInt(e.target.value)) }
            className='border-2 border-blue-500 rounded-md' /> <br />

          <label htmlFor="description">Product Description:</label>
          <input type="text" name="description" 
            value={description} onChange={ onChangeDescription }
            className='border-2 border-blue-500 rounded-md'/> <br/>

          <label htmlFor="minAmount" >Minimum product amount:</label>
          <input type="text" name="minAmount" 
            value={minProdAmount} onChange={ (e) => setMinProdAmount(parseInt(e.target.value))} 
            className='border-2 border-blue-500 rounded-md'/> <br />

          <label htmlFor="maxAmount">Maximum product amount:</label>
          <input type="text" name="maxAmount"
            value={maxProdAmount} onChange={ (e) => setMaxProdAmount(parseInt(e.target.value))}
            className='border-2 border-blue-500 rounded-md' /> <br />

           <label htmlFor="unitsAv">Units available</label>
           <input type="number" name="unitsAv" 
            value={unitsAvailable} onChange={ (e) => setUnitsAvailable(parseInt(e.target.value)) }
            className='border-2 border-blue-500 rounded-md'/> <br />

           <label htmlFor="provName">Provider Name</label>
           <input type="text" name="provName" 
            value={stockistName} onChange={ onChangestockistName }
            className='border-2 border-blue-500 rounded-md'/> <br/>

           <button onClick={ createProd } className="bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" >Send</button>           

      </form>
  );
};

export default ProductForm;
