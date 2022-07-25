import {Link} from 'react-router-dom'
import {Component} from 'react'
import Cookies from 'js-cookie'
import './index.css'

class Login extends Component {
  state = {
    email: '',
    password: '',
    errMsgEmail: false,
    errMsgPwd: false,
    loggedin: false,
  }

  onBlurEmail = event => {
    if (event.target.value === '') {
      this.setState({errMsgEmail: true})
    } else {
      this.setState({email: event.target.value})
    }
  }

  onBlurPwd = event => {
    if (event.target.value === '') {
      this.setState({errMsgPwd: true})
    } else {
      this.setState({password: event.target.value})
    }
  }

  onSubmitLoginForm = event => {
    event.preventDefault()
    const {email, password} = this.state
    const usersDetails = localStorage.getItem('usersList')
    const parsedUserDetails = JSON.parse(usersDetails)
    const eachUserDetails = parsedUserDetails.filter(
      eachUser => eachUser.email === email && eachUser.password === password,
    )
    if (eachUserDetails.length === 1) {
      this.setState({loggedin: true})
      Cookies.set('form_logged_in', true, {expires: 1})
    }
  }

  render() {
    const {loggedin, errMsgEmail, errMsgPwd} = this.state

    if (loggedin === true) {
      const {history} = this.props
      history.replace('/')
    }

    return (
      <div>
        <nav className="nav-bar-login">
          <img
            src="https://www.hartleylab.com/wp-content/themes/hartley/assets/images/logo.png"
            className="website-logo"
            alt="hartley"
          />
          <Link to="/register" className="register">
            Register
          </Link>
        </nav>
        <div className="login-container">
          <img
            src="https://media-exp1.licdn.com/dms/image/C510BAQEZDc5AXOoFPg/company-logo_200_200/0/1523689007495?e=2147483647&v=beta&t=uiHEHwbZlmLfBjVV1AG9u-cV6lvPHHke4HM30wSr9Ts"
            className="login-main-image"
            alt="hartely"
          />
          <form
            className="login-form-container"
            onSubmit={this.onSubmitLoginForm}
          >
            <div className="login-label-input-container">
              <label htmlFor="email-login" className="login-label">
                Email
              </label>
              <input
                id="email-login"
                type="text"
                className="login-input"
                onBlur={this.onBlurEmail}
              />
              {errMsgEmail && <p className="err-msg">*Email Required</p>}
            </div>
            <div className="login-label-input-container">
              <label htmlFor="password-login" className="login-label">
                Password
              </label>
              <input
                id="password-login"
                type="password"
                className="login-input"
                onBlur={this.onBlurPwd}
              />
              {errMsgPwd && <p className="err-msg">*Password Required</p>}
            </div>
            <button type="submit" className="login-button">
              Login
            </button>
          </form>
        </div>
      </div>
    )
  }
}

export default Login
