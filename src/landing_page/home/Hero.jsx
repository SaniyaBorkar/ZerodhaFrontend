
const Hero = () => {
  return (
    <div className="container p-5 ">
        <div className="row text-center justify-content-center">
          <img src="/src/assets/homeHero.png" alt="Hero Image" className=" img-fluid mb-5"/>
          <h1 className="mt-5  display-4">Invest in everything</h1>
          <p className="fs-5 mt-4">Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
          <button className="p-2 btn btn-primary fs-5 mt-4" style={{width: "100%", maxWidth: "300px"}}>SignUp for free</button>
        </div>
    </div>
  )
}

export default Hero
