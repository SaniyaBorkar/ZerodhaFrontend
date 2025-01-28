const Hero = () => {
  return (
    <div className="container">
      <div className="row text-center m-lg-5 pt-5 pb-5 p-lg-5 border-bottom">
        <h2>
          We pioneered the discount broking model in India. <br />
          Now, we are breaking ground with our technology.
        </h2>
      </div>
      <div className="row p-lg-5 mt-5 mb-lg-0 m-lg-5 text-muted">
        <div className="col-lg-6 p-lg-5" style={{fontSize:"17px"}}>
          We kick-started operations on the 15th of August, 2010 with the goal
          of breaking all barriers that traders and investors face in India in
          terms of cost, support, and technology. We named the company Zerodha,
          a combination of Zero and "Rodha", the Sanskrit word for barrier.
          <br/><br/>Today, our disruptive pricing models and in-house technology have made
          us the biggest stock broker in India.<br/><br/> Over 1+ Crore clients place
          millions of orders every day through our powerful ecosystem of
          investment platforms, contributing over 15% of all Indian retail
          trading volumes.
        </div>
        <div className="col-lg-6 p-lg-5 " style={{fontSize:"17px"}}>
          In addition, we run a number of popular open online educational and
          community initiatives to empower retail traders and investors.
          <br/><br/><a href="" style={{ textDecoration:"none"}}>Rainmatter</a>, our fintech fund and incubator, has invested in several
          fintech startups with the goal of growing the Indian capital markets.
          <br/><br/>And yet, we are always up to something new every day. Catch up on the
          latest updates on our <a href="" style={{ textDecoration:"none"}}>blog</a> or see what the media is <a href="" style={{ textDecoration:"none"}}>saying about us.</a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
