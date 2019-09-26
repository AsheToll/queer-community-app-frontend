import React from 'react'

function Login() {
    return(
        <div className = 'login-container'>
            <div className = 'column is-half'>
                <div className = 'logo'>
                    <img src = {require('/Users/ashley/Queer Community App/Queer Community App Frontend/queer-community-app-frontend/src/Unicorn Logo.png')} alt = 'unicorn logo' />
                    <h3>App Name Login</h3>
                </div>
                <form>
                    <fieldset>
                        <label htmlFor = 'usernameField'>Username</label>
                        <input className = 'input login-input' type = 'text' placeholder = 'Username' id = 'usernameField' />

                        <label htmlFor = 'passwordField'>Password</label>
                        <input className = 'input login-input' type = 'text' placeholder = 'Password' id = 'passwordField' />

                        <input className = 'button' type = 'submit' value = 'Login' />
                        <input className = 'button' type = 'submit' value = 'Sign Up' />
                    </fieldset>
                </form>
            </div>
        </div>
    )
}

export default Login