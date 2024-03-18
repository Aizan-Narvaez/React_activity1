import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = (props) => {
  const { loggedIn, email, setLoggedIn } = props
  const navigate = useNavigate()

  const onButtonClick = () => {
    if (loggedIn) {
      // Log out
      setLoggedIn(false);
      navigate('/login'); // Redirect to the login page after logout
    } else {
      // Navigate to the login page
      navigate('/login');
    }
  }

  return (
    <div className="mainContainer">
      <div className={'titleContainer'}>
        <div>Welcome!</div>
      </div>
      <div>This is the home page.</div>
      <div className={'buttonContainer'}>
        <input
          className={'inputButton'}
          type="button"
          onClick={onButtonClick}
          value={loggedIn ? 'Log out' : 'Log in'}
        />
        {loggedIn ? <div>Your email address is {email}</div> : <div />}
      </div>
    </div>
  )
}

export default Home