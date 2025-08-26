const Main = () => {
  return (
    <main>
      <div className="content">
        <div className="container">
          <div className="row">
            <div className="col-100">
              <h2> --&gt; Content goes here &lt;-- </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="body">
        <div className="container">
          <div className="row d-flex">
            <div className="col product">
              <img src="img/buy-comics-digital-comics.png" alt="" />
              <span>DIGITAL COMICS</span>
            </div>
            <div className="col product">
              <img src="img/buy-comics-merchandise.png" alt="" />
              <span>DC MERCHANDISE</span>
            </div>
            <div className="col product">
              <img src="img/buy-comics-subscriptions.png" alt="" />
              <span>SUBSCRIPTIONS</span>
            </div>
            <div className="col product">
              <img src="img/buy-comics-shop-locator.png" alt="" />
              <span>COMIC SHOP LOCATION</span>
            </div>
            <div className="col product">
              <img src="img/buy-dc-power-visa.svg" alt="" />
              <span>DC POWER VISA</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;