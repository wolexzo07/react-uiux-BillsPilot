
function BaseMenu(){

    return(
        <>

            <div className="row mv-menu">
                <div className="col-5"></div>
                <div className="col-2">
                    <div className="make-circle-menu bg-light d-block d-md-none d-lg-none"></div>
                </div>
                <div className="col-5"></div>
            </div>

            <div className="row base-menu">

                <div className="col-6 bg-primary ps-4 pt-1">

                    <div className="row">
                        <div className="col-6 icons-first text-center">
                            <p className=""><i className="bi bi-house"></i></p>
                            <p className="">Home</p>
                        </div>
                        <div className="col-6 icons-first text-center">
                            <p className=""><i className="bi bi-window-plus"></i></p>
                            <p className="">Add funds</p>
                        </div>
                    </div>

                </div>

                <div className="col-6 bg-warning pe-4 pt-1">
                    <div className="row">
                        <div className="col-6 icons-second text-center">
                            <p className=""><i className="bi bi-credit-card-2-front"></i></p>
                            <p className="">Pay Bills</p>
                        </div>
                        <div className="col-6 icons-second text-center">
                            <p className=""><i className="bi bi-menu-button"></i></p>
                            <p className="">Add funds</p>
                        </div>
                    </div>                    
                </div>

            </div>
            
        </>
    )

}

export default BaseMenu