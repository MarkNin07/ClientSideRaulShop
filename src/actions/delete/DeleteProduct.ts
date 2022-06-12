import * as React from 'react';

const HEADERS = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
}

const delProduct = async(id:string) => {
    const response = await fetch(`http://localhost:8080/delete/product/${id}` ,{
        method: 'DELETE',
        headers: HEADERS
    })

    return {productDeleted: response.ok, productId: id}

}

export default delProduct