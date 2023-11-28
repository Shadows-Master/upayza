const ComingSoon = () => {
  return (
    <div id="content" className="site-content">
      <section className="coming-soon">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="cs-content">
                <img
                  src="images/logo-light.svg"
                  className="attachment-full size-full"
                  height={40}
                  width={173}
                  alt=""
                />
                <h2>UPAYZA is in the Works!</h2>
                <ul
                  className="ot-countdown unstyle"
                  data-zone="0"
                  data-date="11/13/2022"
                  data-day="Day"
                  data-days="Days"
                  data-hour="Hour"
                  data-hours="Hours"
                  data-min="Minute"
                  data-mins="Minutes"
                  data-second="Second"
                  data-seconds="Seconds"
                >
                  <li>
                    <span className="days">59</span>
                    <p className="days_text">Days</p>
                  </li>
                  <li className="seperator">:</li>
                  <li>
                    <span className="hours">14</span>
                    <p className="hours_text">Hours</p>
                  </li>
                  <li className="seperator">:</li>
                  <li>
                    <span className="minutes">46</span>
                    <p className="minutes_text">Minutes</p>
                  </li>
                  <li className="seperator">:</li>
                  <li>
                    <span className="seconds">21</span>
                    <p className="seconds_text">Seconds</p>
                  </li>
                </ul>
                <p>We are about to go live so watch this space!</p>
                <form method="post" className="wpcf7-form init">
                  <div className="cs-form">
                    <span className="wpcf7-form-control-wrap your-email">
                      <input
                        type="email"
                        name="your-email"
                        value=""
                        size="40"
                        className="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email"
                        aria-required="true"
                        aria-invalid="false"
                        placeholder="Your Email *"
                      />
                    </span>
                    <button className="octf-btn">Sign Up</button>
                  </div>
                </form>
                <div className="ft-list-icon">
                  <a className="twitter" href="twitter.html">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a className="facebook" href="facebook.html">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a className="linkedin" href="linkedin.html">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a className="instagram" href="instagram.html">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default ComingSoon;
