import React from "react";

const Team = () => {
  return (
    <div className="container mt-5 mt-lg-0">
      <div className="row text-center">
        <h2>People</h2>
      </div>
      <div className="row p-lg-5 mt-5 m-lg-5 text-muted">
        <div className="col-lg-6 p-lg-5 text-center">
          <img
            className="img-fluid"
            src="./src/assets/nithinKamath.jpg"
            style={{ borderRadius: "50%", height:"50%" }}
          ></img>
          <h5 className="mt-5">Nithin Kamath</h5>
          <p className="text-muted">Founder, CEO</p>
        </div>
        <div className="col-lg-6 p-lg-5 " style={{ fontSize: "17px" }}>
          Nithin bootstrapped and founded Zerodha in 2010 to overcome the
          hurdles he faced during his decade long stint as a trader. Today,
          Zerodha has changed the landscape of the Indian broking industry. <br/><br/>He
          is a member of the SEBI Secondary Market Advisory Committee (SMAC) and
          the Market Data Advisory Committee (MDAC). <br/><br/>Playing basketball is his
          zen. <br/> <br/>Connect on Homepage / TradingQnA / Twitter
        </div>
      </div>
    </div>
  );
};

export default Team;
