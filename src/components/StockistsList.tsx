import * as React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getStockists from '../actions/get/GetStockists';
import { getAllStockists, stockistType } from '../state/slice/ProviderSlice';
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

    return(
        <div>
            <h1>List of all the stockists</h1>
            <ul>{stockistsInfo.map((prov:stockistType)=><li key={prov.stockistId}>{prov.stockistName}</li>)}</ul>
        </div>
    )

}

export default StockistsList