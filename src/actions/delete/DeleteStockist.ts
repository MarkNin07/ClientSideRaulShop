import * as React from 'react';

const HEADERS = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
}

const delStockist = async (id: string) => {
    const response = await fetch(`http://localhost:8080/delete/stockist/${id}`,{
        method: 'DELETE',
        headers: HEADERS
    })

    return {stockistDeleted: response.ok, stockistId: id}
}

export default delStockist