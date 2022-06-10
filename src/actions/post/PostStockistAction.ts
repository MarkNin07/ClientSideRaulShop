import { addStockist } from "../../state/slice/ProviderSlice"


const postStockist = async (providerName:string, provId:string, phoneNumber:string, dispatch:any) => {

    const postBody = {
        "stockistName": providerName,
        "stockistPersonalId": provId,
        "phoneNumber": phoneNumber
    }

    let postRequest = await fetch('http://localhost:8080/create/stockist', { 
        method: 'POST',
        headers: {'content-type':'application/json'},
        body: JSON.stringify(postBody)
    })

    let response = await postRequest.json()
    dispatch(addStockist(response))

}

export {postStockist}