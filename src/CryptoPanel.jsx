
function CryptoPanel(){

    const assetsDetails = [
        {
            id:1,
            name:"Bitcoin",
            icon:"/crypto/btc1.webp",
            buttonId:"btc",
            coinPrice:76000.77,
            coinBalance:1.0945,
            coinBalanceInUsd:83520.41,
            boxColor:"",
            buttonColor:""

        },
        {
            id:2,
            name:"Tron (TRC-20)",
            icon:"/crypto/trx1.webp",
            buttonId:"trx",
            coinPrice:0.16,
            coinBalance:34000,
            coinBalanceInUsd:5486.15,
            boxColor:"",
            buttonColor:""

        },
        
        {
            id:3,
            name:"USDT (TRC-20)",
            icon:"/crypto/usdt1.webp",
            buttonId:"usdt",
            coinPrice:1.00,
            coinBalance:2000,
            coinBalanceInUsd:2000,
            boxColor:"",
            buttonColor:""

        },
        
        {
            id:4,
            name:"USDC (TRC-20)",
            icon:"/crypto/usdc1.webp",
            buttonId:"usdc",
            coinPrice:1.00,
            coinBalance:1400,
            coinBalanceInUsd:1400,
            boxColor:"",
            buttonColor:""

        },
        
        {
            id:5,
            name:"Bitcoin cash",
            icon:"/crypto/usdc1.webp",
            buttonId:"bch",
            coinPrice:381.92,
            coinBalance:15,
            coinBalanceInUsd:5728.79,
            boxColor:"",
            buttonColor:""

        },
        
        {
            id:6,
            name:"Litecoin",
            icon:"/crypto/ltc1.webp",
            buttonId:"ltc",
            coinPrice:72.41,
            coinBalance:500,
            coinBalanceInUsd:36207.38,
            boxColor:"",
            buttonColor:""

        },
        
        {
            id:7,
            name:"Dogecoin",
            icon:"/crypto/doge1.webp",
            buttonId:"doge",
            coinPrice:0.25,
            coinBalance:10000,
            coinBalanceInUsd:2473.42,
            boxColor:"",
            buttonColor:""

        }
    ];

    function formatMoney(amount) {
        return new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD'
        }).format(amount);
      }
      

    return(
        <>
                <div className="row">
                    <div className="col-12 bg-light main-c">
                        <div className="card">
                           
                            <div className="card-body pb-4">
                                <h5 className="text-h mb-5"><span className="text-primary fw-bold"> Crypto </span><span className="text-dark">Assets</span></h5>
                                <div className="row">
                                    {assetsDetails.map((item) => 

                                    <div key={item.id} className="col-12 crypto-panel">

                                        <div className="cr-imgpanel float-start">
                                             <img src={item.icon} className="img-crypto"/>
                                        </div>
                                        <div className="cr-namepanel float-start">
                                            <p className="crypto-name fw-bold">
                                                {item.name.toUpperCase()} 
                                            </p>
                                            <p className="coin-price">
                                                {formatMoney(item.coinPrice)}
                                            </p>
                                        </div>

                                        <div className="coin-panel-balances float-end">

                                            <p className="coin-balance text-dark fw-bold">
                                                {item.coinBalance + " " + item.buttonId.toUpperCase()}
                                            </p>

                                            <p className="coin-balance-usd text-primary">
                                                {formatMoney(item.coinBalanceInUsd)}
                                            </p> 

                                        </div>
                                   
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

export default CryptoPanel