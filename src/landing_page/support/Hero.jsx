
const Hero = () => {
  return (
    <section className="container-fluid" id="supportHero">
     
      <div className="pt-5 pb-3" id="supportWrapper">
        <h5>Support portal</h5>
        <a href="">Track Tickets</a>
      </div>
      <div className="row px-lg-5 mx-lg-5">
        <div className="col-lg-6 px-lg-5 mb-5 pb-5">
          <h5 className="mb-4 mt-3">Search for an answer or browse help topics to create a ticket</h5>
          <input className="mb-3" placeholder="Eg. How do I active F&O, why am I geeting..."/> <br/>
          <a className="fs-5" href="">Track account opening </a> &nbsp; &nbsp; &nbsp;
          <a className="fs-5" href="">Track segment activation </a>
          <a className="fs-5" href="">Intraday margins </a>&nbsp;&nbsp;&nbsp;&nbsp;
          <a  className="fs-5" href="">Kite user manual</a>
        </div>
        
        <div className="col-lg-6 p-lg-3 ">
          <h5>Featured</h5>
          <ol>
            <li><a href="">Offer for sale (OFS) - November 2024</a></li>
            <li><a href="">Surveillance measure on scrips - November 2024</a></li>
          
          </ol>
        </div>
      </div>
    </section>
  )
}

export default Hero