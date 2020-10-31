/** @jsx jsx */
import { jsx } from '@emotion/core'

import 'bootstrap/dist/css/bootstrap-reboot.css'
import '@reach/dialog/styles.css'
import React from 'react'
import ReactDOM from 'react-dom'
import { Button, Input, FormGroup } from './components/lib'
import { Modal, ModalContents, ModalOpenButton } from './components/modal'
import { Logo } from './components/logo'

function LoginForm({ onSubmit, submitButton }) {
  function handleSubmit(event) {
    event.preventDefault()
    const { username, password } = event.target.elements

    onSubmit({
      username: username.value,
      password: password.value,
    })
  }

  // 🐨 this <form> could use a css prop
  // 🎨
  //    display: 'flex',
  //    flexDirection: 'column',
  //    alignItems: 'stretch',
  //    '> div': {
  //      margin: '10px auto',
  //      width: '100%',
  //      maxWidth: '300px',
  //    },
  return (
    <form css={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'stretch',
      '> div': {
        margin: '10px auto',
        width: '100%',
        maxWidth: '300px',
      },
    }} onSubmit={handleSubmit}>
      {/* 🐨 these div elements could be a FormGroup you create in components/lib */}
      {/* 🐨 and the inputs elements could be custom styled Input components too */}
      <FormGroup>
        <label htmlFor="username">Username</label>
        <Input id="username" />
      </FormGroup>
      <FormGroup>
        <label htmlFor="password">Password</label>
        <Input id="password" type="password" />
      </FormGroup>
      <FormGroup>{React.cloneElement(submitButton, { type: 'submit' })}</FormGroup>
    </form>
  )
}

function App() {
  function login(formData) {
    const buttonVariants = {
      primary: {
        background: '#3f51b5',
        color: 'white'
      },
      secondary: {
        background: '#f1f2f7',
        color: '#434449'
      }
    }
    console.log('bajs')
    console.log('buttonvariants', buttonVariants['secondary'])
    console.log('login', formData)
  }

  function register(formData) {
    console.log('register', formData)
  }

  // 🐨 this div could use a css prop to get its children rendered nicer
  // 🎨
  //    display: 'flex',
  //    flexDirection: 'column',
  //    alignItems: 'center',
  //    justifyContent: 'center',
  //    width: '100%',
  //    height: '100vh',
  return (
    <div css={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      height: '100vh',
    }}>
      <Logo width="80" height="80" />
      <h1>Bookshelf</h1>

      <div css={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
        gridGap: '0.75rem'
      }}>
        <Modal>
          <ModalOpenButton>
            <Button variant="primary">Login</Button>
          </ModalOpenButton>
          <ModalContents aria-label="Login form" title="Login">
            <LoginForm
              onSubmit={login}
              submitButton={<Button variant="primary">Login</Button>}
            />
          </ModalContents>
        </Modal>
        <Modal>
          <ModalOpenButton>
            <Button variant="secondary">Register</Button>
          </ModalOpenButton>
          <ModalContents aria-label="Registration form" title="Register">
            <LoginForm
              onSubmit={register}
              submitButton={<Button variant="secondary">Register</Button>}
            />
          </ModalContents>
        </Modal>
      </div>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
