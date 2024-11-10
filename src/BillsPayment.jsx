
function BillsPayment(){

    const menuIcon = [
        {
            id:1,
            name:"Airtime",
            icon:"bi-phone",
            iconColor:"",
            buttonId:"",
            buttonColor:""

        },
        
        {
            id:2,
            name:"Data",
            icon:"bi-router",
            iconColor:"",
            buttonId:"",
            buttonColor:""

        },
        
        {
            id:3,
            name:"Power",
            icon:"bi-plug",
            iconColor:"",
            buttonId:"",
            buttonColor:""

        },
        
        {
            id:4,
            name:"Cable",
            icon:"bi-tv",
            iconColor:"",
            buttonId:"",
            buttonColor:""

        }
    ];

    return(
        <>
                <div className="row bill-mv">
                    <div className="col-12 bg-light main-b">
                        <div className="card">
                           
                            <div className="card-body pb-4">
                                <h5 className="text-h mb-4"><span className="text-primary fw-bold"> Bills </span><span className="text-dark">Payment</span></h5>
                                <div className="row">
                                    {menuIcon.map((item) => 

                                    <div key={item.id} className="col-3 text-center">
                                        <p className="icons-n"><i className={item.icon}></i></p>
                                        <p className="icons-name fw-bold">{item.name}</p>
                                    </div>
                                    
                                    )}
                                        
                                </div> 
                            </div>
                        </div>    

                    </div>
                </div>
        </>
    )

}

export default BillsPayment