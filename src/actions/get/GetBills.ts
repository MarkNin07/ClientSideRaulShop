
const getBills = async () => {

    let getBillsReq = await fetch('http://localhost:8080/get/all/bills')

    let billData = await getBillsReq.json()

    return billData
}

export default getBills