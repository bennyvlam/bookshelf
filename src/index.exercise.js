import React from 'react'
import ReactDOM from 'react-dom'
import { Logo } from './components/logo'
import { Dialog, DialogOverlay, DialogContent } from '@reach/dialog'
import '@reach/dialog/styles.css'

function App() {
    const [openModal, setOpenModal] = React.useState('none')

    function handleLogin() {
        setOpenModal('login')
    }

    const handleRegister = () => {
        setOpenModal('register')
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
            </Dialog>
            <Dialog aria-label="Register form" isOpen={openModal === 'register'}>
                <button onClick={() => setOpenModal('none')}>Close</button>
                <h3>Register</h3>
            </Dialog>
        </div>
    )
}

// 🐨 use ReactDOM to render the <App /> to the root element
// 💰 find the root element with: document.getElementById('root')
ReactDOM.render(<App />, document.getElementById('root'))