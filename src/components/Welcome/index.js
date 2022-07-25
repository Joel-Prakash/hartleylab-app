import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import Header from '../Header'
import './index.css'

class Welcome extends Component {
  render() {
    const cookieIsFormLoggedIn = Cookies.get('form_logged_in')
    if (cookieIsFormLoggedIn === undefined) {
      return <Redirect to="/login" />
    }
    return (
      <div className="welcome-main-container">
        <Header />
        <div className="welcome-container">
          <img
            src="https://www.hartleylab.com/wp-content/themes/hartley/assets/images/info-icon-services.png"
            className="welcome-main-image"
            alt="welcome"
          />
          <div className="welcome-content-container">
            <h1 className="welcome-text">welcome</h1>
            <p className="welcome-para">
              <span className="title">Hartley Lab</span> is a mission focused
              company driven through the passion for technology to provide
              simple solutions to complex business problems.
            </p>
            <p className="welcome-para">
              We provide custom, end-to-end services in{' '}
              <span className="web">web</span> and{' '}
              <span className="mobile">mobile product</span> development from
              user research and design, to technical architecture, devOps and
              QA.
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default Welcome
