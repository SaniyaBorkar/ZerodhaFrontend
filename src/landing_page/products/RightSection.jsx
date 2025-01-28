const RightSection = ({
  imgUrl,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) => {
  return (
    <div className="container">
      <div className="row mt-5 p-lg-5">
        {/* Image Section */}
        <div className="col-lg-6 order-1 order-lg-3">
          <img className="img-fluid" src={imgUrl} alt={productName} />
        </div>
        <div className="col-lg-1 order-lg-2"></div>
        {/* Text Section */}
        <div className="col-lg-5 order-2 order-lg-1 p-lg-5">
          <h1>{productName}</h1>
          <p className="pt-3">{productDescription}</p>
          <div>
            <a href={tryDemo} >Try Demo</a>
            <a href={learnMore}>Learn More</a>
          </div>
          <div className=" pt-4">
            <a href={googlePlay}>
              <img className="img-fluid" src="./src/assets/googlePlayBadge.svg" alt="Google Play" />
            </a>
            <a href={appStore} className="ms-3">
              <img className="img-fluid" src="./src/assets/appStoreBadge.svg" alt="App Store" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSection;
