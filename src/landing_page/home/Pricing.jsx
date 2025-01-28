

const Pricing = () => {
  return (
    <div className="container p-lg-5">
      <div className="row p-5">
        <div className="col-lg-5 col-sm-12">
          <h1>Unbeatable pricing</h1>
          <p className="mt-4">We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
          <a href='' className=" fs-5" style={{textDecorationLine: "none"}}>See Pricing →</a>
        </div>
        <div className="col-7 mt-4">
          <img className="img-fluid" src="/src/assets/pricing.png" style={{width:"100%", maxWidth: "700px"}}/>
        </div>
      </div>

    </div>
  )
}

export default Pricing