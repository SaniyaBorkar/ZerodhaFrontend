
const Awards = () => {
  return (
    <div className="container p-lg-5 ml-5 mr-5 mb-lg-5 justify-content-center">
      <div className="row p-lg-5">
        <div className="col-lg-6 col-sm-12 mt-sm-4 p-5">
          <img src="/src/assets/largestBroker.svg" className="img-fluid"/>
        </div>
        <div className="col-lg-6 col-sm-12 pt-5 p-5 mt-sm-5">
          <h1>Larget stock broker in India</h1>
          <p className="mt-4">2+ million Zerodha clients contribute to over 15% of all retail order volumes in India by trading and investing in:</p>
          <div className="row mt-5">
            <div className="col-lg-6 col-sm-12">
              <ul>
                <li>
                  <p>Futures and Options</p>
                </li>
                <li>
                  <p>Commodity Derivations</p>
                </li>
                <li>
                  <p>Currency derivatives</p>
                </li>
            </ul>
            </div>
            <div className="col-lg-6 col-sm-12">
              <ul>
                <li>
                  <p>Stocks and IPOs</p>
                </li>
                <li>
                  <p>Direct mutual funds</p>
                </li>
                <li>
                  <p>Bonds and Gov Securities</p>
                </li>
            </ul>
            </div>
          
          </div>
          <img src="/src/assets/presslogos.png" className="img-fluid mt-5"/>
        </div>
      </div>
    </div>
  )
}

export default Awards