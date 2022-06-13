
const getBills = async () => {

    let getBillsReq = await fetch('https://raulshwhop.herokuapp.com/get/all/bills')

    let billData = await getBillsReq.json()

    return billData
}

export default getBills