import { addBill } from "../../state/slice/BillSlice"

const postBill = async (productName:string, date:string, clientName:string, salesPerson:string, price:number, dispatch:any) => {

    const postBillBody = {
        "date": date,
        "clientName": clientName,
        "salesPerson": salesPerson,
        "totalBill": price,
        "productName": productName
    }

    let postBillReq = await fetch('https://raulshwhop.herokuapp.com/create/bill', {
        method: 'POST',
        headers: {'content-type':'application/json'},
        body: JSON.stringify(postBillBody)
    })

    let response = await postBillReq.json()
    dispatch(addBill(response))

}

export default postBill