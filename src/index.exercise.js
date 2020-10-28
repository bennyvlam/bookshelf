import React from 'react'
import ReactDOM from 'react-dom'
import { Logo } from './components/logo'
import { Dialog, DialogOverlay, DialogContent } from '@reach/dialog'
import '@reach/dialog/styles.css'

function LoginForm({ onSubmit, buttonText }) {
  return (
    <form onSubmit={onSubmit}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input></input>
      </div>
      <div>
        <label htmlFor="passwordInput">Password:</label>
        <input></input>
      </div>
      <button>{buttonText}</button>
    </form>
  )
}

function App() {
  const [openModal, setOpenModal] = React.useState('none')

  function handleLogin() {
    setOpenModal('login')
  }

  // Just another way of writing a function, probably more common idk yet
  const handleRegister = () => {
    setOpenModal('register')
  }

  function login(formData) {
    console.log('login', formData)
  }

  function register(formData) {
    console.log('register', formData)
  }

  return (
    <div>
      <Logo width="80" height="80"></Logo>
      <h1>Bookshelf</h1>
      <div><button onClick={handleLogin}>Login</button></div>
      <div><button onClick={handleRegister}>Register</button></div>
      <Dialog aria-label="Login form" isOpen={openModal === 'login'}>
        <button onClick={() => setOpenModal('none')}>Close</button>
        <h3>Login</h3>
        <LoginForm onSubmit={login} buttonText="Login"></LoginForm>
      </Dialog>
      <Dialog aria-label="Register form" isOpen={openModal === 'register'}>
        <button onClick={() => setOpenModal('none')}>Close</button>
        <h3>Register</h3>
        <LoginForm onSubmit={register} buttonText="Login"></LoginForm>
      </Dialog>
    </div>
  )
}

// 🐨 use ReactDOM to render the <App /> to the root element
// 💰 find the root element with: document.getElementById('root')
ReactDOM.render(<App />, document.getElementById('root'))