import * as React from 'react';

const getStockists = async () =>{

    let getRequest = await fetch('https://raulshwhop.herokuapp.com/get/all/stockists')

    let data = await getRequest.json()

    return data

}

export default getStockists