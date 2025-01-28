const LeftSection = ({
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
        <div className="col-lg-6 p-lg-5">
          <img className="img-fluid" src={imgUrl} />
        </div>
        <div className="col-lg-1"></div>
        <div className="col-lg-5 p-lg-5 ">
          <h1>{productName}</h1>
          <p className="pt-3"> {productDescription}</p>
          <div>
            <a href={tryDemo}>Try Demo</a>
            <a href={learnMore}>Learn More</a>
          </div>
          <div className="pt-4">
            <a href={googlePlay}>
              <img className="img-fluid" src="./src/assets/googlePlayBadge.svg" />
            </a>
            <a href={appStore}>
              <img className="img-fluid" src="./src/assets/appStoreBadge.svg" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSection;
