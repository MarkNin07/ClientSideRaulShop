import * as React from 'react';

const getProducts = async () => {

    let getProdRequest = await fetch('http://localhost:8080/get/all/products')

    let productData = await getProdRequest.json()
    
    return productData
}

export default getProducts