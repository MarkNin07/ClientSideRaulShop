import * as React from 'react';

const HEADERS = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
}

const delStockist = async (id: string) => {
    const response = await fetch(`https://raulshwhop.herokuapp.com/delete/stockist/${id}`,{
        method: 'DELETE',
        headers: HEADERS
    })

    return {stockistDeleted: response.ok, stockistId: id}
}

export default delStockist