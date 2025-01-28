
const Hero = () => {
  return (
    <div className="container">
      <div className="row text-center mt-5 pt-md-5 mt-md-5">
        <h1 style={{fontSize:"40px"}}>Charges</h1>
        <p className="text-muted" style={{fontSize:"20px"}}>List of all charges and taxes</p>
      </div>
      <div className="row text-center p-lg-5 m-lg-5">
        <div className="col-lg-4 mt-lg-5" >
          <img className="img-fluid" src="./src/assets/pricingEquity.svg" style={{maxWidth:"270px"}}></img>
          <h3 className="text-muted">Free equity delivery</h3>
          <p className="text-muted mt-3">All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
        </div>
        <div className="col-lg-4 mt-lg-5" >
        <img className="img-fluid" src="./src/assets/intradayTrades.svg" style={{maxWidth:"270px"}}></img>
          <h3 className="text-muted">Intraday and F&O trades</h3>
          <p className="text-muted mt-3">Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
        </div>
        <div className="col-lg-4  mt-lg-5" >
        <img className="img-fluid" src="./src/assets/pricingEquity.svg" style={{maxWidth:"270px"}}></img>
          <h3 className="text-muted">Free direct MF</h3>
          <p className="text-muted mt-3">All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
        </div>
      </div>
    </div>
  )
}

export default Hero