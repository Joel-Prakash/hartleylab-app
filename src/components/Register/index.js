import {Link} from 'react-router-dom'
import {Component} from 'react'
import './index.css'

class Register extends Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    errMsgFirstName: false,
    errMsgLastName: false,
    errMsgEmail: false,
    errMsgPwd: false,
    errMsgConfirmPwd: false,
    formSubmission: false,
  }

  onBlurFirstName = event => {
    if (event.target.value === '') {
      this.setState({errMsgFirstName: true})
    } else {
      this.setState({firstName: event.target.value, errMsgFirstName: false})
    }
  }

  onBlurLastName = event => {
    if (event.target.value === '') {
      this.setState({errMsgLastName: true})
    } else {
      this.setState({lastName: event.target.value, errMsgLastName: false})
    }
  }

  onBlurEmail = event => {
    const isItIncludes = event.target.value.includes('@')
    if (event.target.value === '' || isItIncludes === false) {
      this.setState({errMsgEmail: true})
    } else {
      this.setState({email: event.target.value, errMsgEmail: false})
    }
  }

  onBlurPassword = event => {
    if (event.target.value === '') {
      this.setState({errMsgPwd: true})
    } else {
      this.setState({password: event.target.value, errMsgPwd: false})
    }
  }

  onBlurConfirmPassword = event => {
    if (event.target.value === '') {
      this.setState({errMsgConfirmPwd: true})
    } else {
      this.setState({
        confirmPassword: event.target.value,
        errMsgConfirmPwd: false,
      })
    }
  }

  onSubmitRegisterForm = event => {
    event.preventDefault()
    const {firstName, lastName, email, password, confirmPassword} = this.state
    if (firstName === '') {
      this.setState({errMsgFirstName: true})
    } else if (lastName === '') {
      this.setState({errMsgLastName: true})
    } else if (email === '') {
      this.setState({errMsgEmail: true})
    } else if (password === '') {
      this.setState({errMsgPwd: true})
    } else if (confirmPassword === '') {
      this.setState({errMsgConfirmPwd: true})
    } else {
      this.setState({formSubmission: true})
      const myObject = {
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
      }
      if (localStorage.getItem('usersList') === null) {
        localStorage.setItem('usersList', '[]')
      }
      const oldList = JSON.parse(localStorage.getItem('usersList'))
      oldList.push(myObject)
      localStorage.setItem('usersList', JSON.stringify(oldList))
    }
  }

  onSubmitAnotherResponse = () => {
    this.setState({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      errMsgFirstName: false,
      errMsgLastName: false,
      errMsgEmail: false,
      errMsgPwd: false,
      errMsgConfirmPwd: false,
      formSubmission: false,
    })
  }

  render() {
    const {
      errMsgFirstName,
      errMsgLastName,
      errMsgEmail,
      errMsgPwd,
      errMsgConfirmPwd,
      formSubmission,
    } = this.state
    let registrationForm
    if (formSubmission === true) {
      registrationForm = (
        <div className="registration-successful-container">
          <h1 className="registration-successful-text">
            Registration Successful
          </h1>
          <button
            type="button"
            className="registration-successful-button"
            onClick={this.onSubmitAnotherResponse}
          >
            Submit Another Registration
          </button>
        </div>
      )
    } else {
      registrationForm = (
        <form
          className="register-form-container"
          onSubmit={this.onSubmitRegisterForm}
        >
          <div className="register-label-input-container">
            <label htmlFor="first-name-reg" className="register-label">
              First Name
            </label>
            <input
              id="first-name-reg"
              type="text"
              className="register-input"
              onBlur={this.onBlurFirstName}
            />
            {errMsgFirstName && <p className="err-msg">*First Name Required</p>}
          </div>
          <div className="register-label-input-container">
            <label htmlFor="last-name-reg" className="register-label">
              Last Name
            </label>
            <input
              id="last-name-reg"
              type="text"
              className="register-input"
              onBlur={this.onBlurLastName}
            />
            {errMsgLastName && <p className="err-msg">*Last Name Required</p>}
          </div>
          <div className="register-label-input-container">
            <label htmlFor="email-reg" className="register-label">
              Email
            </label>
            <input
              id="email-reg"
              type="text"
              className="register-input"
              onBlur={this.onBlurEmail}
            />
            {errMsgEmail && <p className="err-msg">*Email Required</p>}
          </div>
          <div className="register-label-input-container">
            <label htmlFor="password-reg" className="register-label">
              Password
            </label>
            <input
              id="password-reg"
              type="password"
              className="register-input"
              onBlur={this.onBlurPassword}
            />
            {errMsgPwd && <p className="err-msg">*Password Required</p>}
          </div>
          <div className="register-label-input-container">
            <label htmlFor="confirm-password-reg" className="register-label">
              Confirm Password
            </label>
            <input
              id="confirm-password-reg"
              type="password"
              className="register-input"
              onBlur={this.onBlurConfirmPassword}
            />
            {errMsgConfirmPwd && (
              <p className="err-msg">*Confirm Password Required</p>
            )}
          </div>
          <button type="submit" className="register-button">
            Register
          </button>
        </form>
      )
    }
    return (
      <div>
        <nav className="nav-bar-register">
          <img
            src="https://www.hartleylab.com/wp-content/themes/hartley/assets/images/logo.png"
            className="website-logo"
            alt="hartley"
          />
          <Link to="/login" className="login">
            Login
          </Link>
        </nav>
        <div className="register-container">
          <img
            src="https://media-exp1.licdn.com/dms/image/C510BAQEZDc5AXOoFPg/company-logo_200_200/0/1523689007495?e=2147483647&v=beta&t=uiHEHwbZlmLfBjVV1AG9u-cV6lvPHHke4HM30wSr9Ts"
            className="register-main-image"
            alt="hartely"
          />
          {registrationForm}
        </div>
      </div>
    )
  }
}

export default Register
