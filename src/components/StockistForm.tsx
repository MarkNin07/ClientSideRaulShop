import * as React from 'react';
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { postStockist } from '../actions/post/PostStockistAction';



const StockistForm = () => {

    const dispatch = useDispatch()

    const [providerName, setProviderName] = useState('')
    const onChangeProviderName = (e:React.ChangeEvent<HTMLInputElement>) =>
        setProviderName(e.target.value)

    const [provId, setProvId] = useState('')
    const onChangeProvId = (e:React.ChangeEvent<HTMLInputElement>) =>
        setProvId(e.target.value)

    const [phoneNumber, setPhoneNumber] = useState('')
    const onChangePhoneNumb = (e:React.ChangeEvent<HTMLInputElement>) =>
        setPhoneNumber(e.target.value)

    
    const sendForm = (e:React.FormEvent<HTMLButtonElement>) =>{
        e.preventDefault()
        postStockist(providerName, provId, phoneNumber, dispatch)
        setProviderName('')
        setProvId('')
        setPhoneNumber('')
    }

  return (
      <form>
          <label htmlFor="providerName">Stockist Name:</label>
          <input type="text" name="providerName" 
          value={providerName} onChange={onChangeProviderName} /> <br />
          <label htmlFor="provPersonalID">Stockist Personal ID:</label>
          <input type="text" name="provPersonalID"
           value={provId} onChange={ onChangeProvId } /> <br />
           <label htmlFor="phoneNumber">Phone Number:</label>
           <input type="text" name="phoneNum" 
           value={phoneNumber} onChange={ onChangePhoneNumb }/>
           <button onClick={ sendForm }>Send</button>           
      </form>
    )
}

export default StockistForm;
