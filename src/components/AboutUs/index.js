import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import Header from '../Header'
import './index.css'

const AboutUs = () => {
  const cookieIsFormLoggedIn = Cookies.get('form_logged_in')
  if (cookieIsFormLoggedIn === undefined) {
    return <Redirect to="/login" />
  }
  return (
    <div className="aboutus-main-container">
      <Header />
      <div className="aboutus-container">
        <img
          src="https://www.hartleylab.com/wp-content/themes/hartley/assets/images/info-icon-blog.png"
          className="welcome-main-image"
          alt="welcome"
        />
        <div className="aboutus-content-container">
          <h1 className="aboutus-text">About Us</h1>
          <p className="aboutus-para">
            We have been producing top quality, user driven applications for
            hundreds of clients, for over 5 years.From one person startups, to
            Fortune 500 enterprises, universities and non-profits.
          </p>
          <p className="aboutus-para1">
            Our Philosophy: <span className="philosophy">Make It Simple</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
