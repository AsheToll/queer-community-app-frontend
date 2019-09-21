import React from 'react'

function Login() {
    return(
        <div className = 'login-container'>
            <div className = 'row'>
                <div className = 'column column-50 column-offset-25'>
                    App Name Login
                    <form>
                        <fieldset>
                            <label htmlFor = 'usernameField'>Username</label>
                            <input type = 'text' placeholder = 'Username' id = 'usernameField' />

                            <label htmlFor = 'passwordField'>Password</label>
                            <input type = 'text' placeholder = 'Password' id = 'passwordField' />

                            <input className = 'button-primary' type = 'submit' value = 'Login' />
                            <input className = 'button' type = 'submit' value = 'Sign Up' />
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login