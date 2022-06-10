import * as React from 'react';

const getStockists = async () =>{

    let getRequest = await fetch('http://localhost:8080/get/all/stockists')

    let data = await getRequest.json()

    return data

}

export default getStockists