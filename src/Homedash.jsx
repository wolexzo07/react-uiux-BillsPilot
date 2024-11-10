import Balances from "./AccountBalance.jsx"
import BillsPayment from "./BillsPayment.jsx"
import CryptoPanel from "./CryptoPanel.jsx"
import Personal from "./TopMost.jsx"
import BaseMenu from "./BaseMenu.jsx"

function Homedash(){

    return(
        <>
            <div className="container-fluid">
                <Personal/>
                <Balances/>
                <BillsPayment/>
                <CryptoPanel/>
                <BaseMenu/>
            </div>
        </>
    )

}

export default Homedash