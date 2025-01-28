

const Education = () => {
  return (
    <div className="conatiner p-lg-5">
        <div className="row p-5">
          <div className="col-lg-6 col-sm-12 mb-5">
            <img className="img-fluid" src="/src/assets/education.svg" />
          </div>
          <div className="col-lg-6 col-sm-12">
            <h1 className="mb-4" style={{fontSize:"30px"}}>Free and open market education</h1>
            <p>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
            <a href='' className=" fs-5" style={{textDecorationLine: "none"}}>Varsity →</a>
            <p className="mt-4">Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
            <a href='' className=" fs-5" style={{textDecorationLine: "none"}}>Trading Q&A →</a>
          </div>
        </div>
    </div>
  )
}

export default Education