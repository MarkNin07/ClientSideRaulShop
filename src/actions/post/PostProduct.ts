import { addProduct } from "../../state/slice/ProductSlice"

const postProduct = async (productName:string, price:number, 
    description:string, minProdAmount:number, maxProdAmount:number, 
    unitsAvailable:number, stockistName:string, dispatch:any ) => {

        const postBody = {
            "productName": productName,
            "price": price,
            "description": description,
            "minProdAmount": minProdAmount,
            "maxProdAmount": maxProdAmount,
            "unitsAvailable": unitsAvailable,
            "stockistName": stockistName
        }

        let postProdReq = await fetch('http://localhost:8080/create/product', {
            method: 'POST',
            headers: {'content-type':'application/json'},
            body: JSON.stringify(postBody)
        })

        let response = await postProdReq.json()
        dispatch(addProduct(response))
    }

    export {postProduct}