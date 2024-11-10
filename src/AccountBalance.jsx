function AccountBalance(){

    return(<>
            
            <div className="row mv-top">
                <div className="col-5"></div>
                <div className="col-2">
                    <div className="make-circle-second bg-light d-block d-md-none d-lg-none"></div>
                </div>
                <div className="col-5"></div>
            </div>

            <div className="row account-panel position-relative">
                <div className="col-6 bg-primary text-light ngn-balance">
                    <p className="currency">NGN</p>
                    <p className="currency-balance">100,000,000</p>
                    <button className="btn btn-sm btn-dark mt-3 fund-button float-start fw-bold"><i className="bi bi-plus"></i> Add Fund</button>
                </div>
                <div className="col-6 bg-warning text-dark usd-balance">
                    <p className="currency">USD</p>
                    <p className="currency-balance">10,000,000</p>
                    <button className="btn btn-sm btn-light mt-3 fund-button float-end fw-bold"><i className="bi bi-plus"></i> Add Fund</button>
                </div>
            </div>
    </>)

}

export default AccountBalance