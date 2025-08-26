const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row d-flex">
          <div className="footer-col">
            <nav className="footer-nav d-flex">
              <div className="option">
                <h4>DC COMICS</h4>
                <ul>
                  <li><a href="#">Characters</a></li>
                  <li><a href="#">Comics</a></li>
                  <li><a href="#">Movies</a></li>
                  <li><a href="#">TV</a></li>
                  <li><a href="#">Games</a></li>
                  <li><a href="#">Videos</a></li>
                  <li><a href="#">News</a></li>
                </ul>
              </div>
              <div className="option">
                <h4>SHOP</h4>
                <ul>
                  <li><a href="#">Shop DC</a></li>
                  <li><a href="#">Shop DC Collectibilies</a></li>

                </ul>
              </div>
              <div className="option">
                <h4>DC</h4>
                <ul>
                  <li><a href="#">Terms Of Use</a></li>
                  <li><a href="#">Privacy policy (New)</a></li>
                  <li><a href="#">Ad Choices</a></li>
                  <li><a href="#">Advertising</a></li>
                  <li><a href="#">Jobs</a></li>
                  <li><a href="#">Subscriptions</a></li>
                  <li><a href="#">Talent Workshops</a></li>
                  <li><a href="#">CPSC Certificates</a></li>
                  <li><a href="#">Ratings</a></li>
                  <li><a href="#">Shop Help</a></li>
                  <li><a href="#">Contact Us</a></li>
                </ul>
              </div>
              <div className="option">
                <h4>SITES</h4>
                <ul>
                  <li><a href="#">DC</a></li>
                  <li><a href="#">MAD magazine</a></li>
                  <li><a href="#">DC Kids</a></li>
                  <li><a href="#">DC Universe</a></li>
                  <li><a href="#">DC Power Visa</a></li>
                </ul>
              </div>
            </nav>
          </div>
          <div className="footer-col bg-dc"></div>
        </div>
      </div>
      <div className="bottom-footer">
        <div className="container d-flex justify-content-between align-center">
          <div>
            <button className="btn">SIGN-UP NOW!</button>
          </div>
          <div className="socials d-flex align-center">
            <h4>FOLLOW US</h4>
            <img src="img/footer-facebook.png" alt="" />
            <img src="img/footer-twitter.png" alt="" />
            <img src="img/footer-youtube.png" alt="" />
            <img src="img/footer-pinterest.png" alt="" />
            <img src="img/footer-periscope.png" alt="" />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;