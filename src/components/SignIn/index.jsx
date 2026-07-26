import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {Navigate} from 'react-router-dom'
import Cookies from 'js-cookie'

import './index.css';   

const SignIn = () => {
  const [emailInput, setEmailInput] = useState('')
  const [passwordInput, setPasswordInput] = useState('')
  const [showSubmitError, setShowSubmitError] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const onChangeEmail = event => {
    setEmailInput(event.target.value)
  }

  const onChangePassword = event => {
    setPasswordInput(event.target.value)
  }

  const onSubmitSuccess = jwtToken => {
    Cookies.set('jwt_token', jwtToken, {expires: 7})
    setShowSubmitError(false)
    navigate('/', {replace: true})
  }

  const onSubmitFailure = errorMsg => {
    setShowSubmitError(true)
    setErrorMsg(errorMsg)
  }

  const onSubmitForm = async event => {
    event.preventDefault()

    setIsLoading(true)

    const userDetails = {
      email: emailInput,
      password: passwordInput,
    }

    const url = 'https://serverless-api-teal.vercel.app/api/auth/signin'

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userDetails),
    }

    try {
      const response = await fetch(url, options)
      const data = await response.json()

      if (response.ok) {
        onSubmitSuccess(data.data.token)
      } else {
        onSubmitFailure(data.message)
      }
    } catch (error) {
      onSubmitFailure('Something went wrong. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  const jwtToken = Cookies.get('jwt_token')

  if (jwtToken !== undefined) {
    return <Navigate to="/" replace />
  }

  return (
      <div className='login-con'>
        <div className='sign-in-logo-con'>
            <h1 className='sign-in-logo'>NXTFLIX</h1>
            <p className='sign-in-logo-para'>Unlimited movies, shows and more. Watch anywhere. Cancel anytime.</p>
        </div>
        <div className='sign-in-form-main-con'>
            <form className='sign-in-form-con' onSubmit={onSubmitForm} >
                <h1 className='sign-in-form-heading'>Sign In</h1>
                {showSubmitError && (
                    <div className='sig-in-error-con'>
                        <p className='sign-in-error-msg'>*{errorMsg}</p>
                    </div>
                )}
                <label htmlFor='email' className='sign-in-form-label'>EMAIL</label>
                <input type='email' id='email' className='sign-in-form-input' placeholder='Enter your email' value={emailInput} onChange={onChangeEmail} />
                <label htmlFor='password' className='sign-in-form-label'>PASSWORD</label>
                <input type='password' id='password' className='sign-in-form-input' placeholder='Enter your password' value={passwordInput} onChange={onChangePassword} />
                <button
                  type="submit"
                  className="sign-in-form-btn"
                  disabled={isLoading}
                >
                 {isLoading ? 'Signing in...' : 'Sign In'}
                </button>
            </form>
        </div>
      </div>
    )
}


export default SignIn;