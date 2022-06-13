import * as React from 'react';

const getProducts = async () => {

    let getProdRequest = await fetch('https://raulshwhop.herokuapp.com/get/all/products')

    let productData = await getProdRequest.json()
    
    return productData
}

export default getProducts