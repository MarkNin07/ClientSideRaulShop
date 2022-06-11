import * as React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import delStockist from '../actions/delete/DeleteStockist';
import getStockists from '../actions/get/GetStockists';
import { deleteStockist, getAllStockists, stockistType } from '../state/slice/ProviderSlice';
import {store} from '../state/Store'

const StockistsList = () => {

    const dispatch = useDispatch()

    const stockistsInfo = useSelector((state:store) => state.stockist)

    useEffect(()=>{
        getStockists().then(
            (provider)=>{
                dispatch(getAllStockists(provider))
            }
        )
        },[])

    const handleDel = async (id:string) => {
        console.log(id);        
        const response = await delStockist (id) 
        if(response.stockistDeleted){
            dispatch(deleteStockist(id))
        }
    }
    

    return(
        <div>
            <h1>List of all the stockists</h1>
            <ul>{stockistsInfo.map((prov:stockistType, index)=>
            <li key={index}>
                {prov.stockistName} <button onClick={()=>handleDel(prov.stockistId)} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded'>Delete Stockist</button>
            </li>)}
            </ul>
        </div>
    )

}

export default StockistsList