import React from 'react'

class Login extends React.Component {
    constructor() {
        super()
        this.state = {
            user: {
                username: '',
                password: ''
            }
        }
    }
    
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    login = (event) => {
        event.preventDefault()
        fetch(`http://localhost:4000/login`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                user: {
                    username: this.state.username,
                    password: this.state.password
                }
            })
        })
            .then(resp => resp.json())
            .then(data => {
                debugger
                if (data.authenticated) {
                    localStorage.setItem('token', data.token)
                    this.props.updateUser(data.user)
                }
            })
    }

    render() {
        return(
            <div className = 'login-container'>
                <div className = ' columns login-card'>
                    <div className = 'column is-half login-left-column'>
                        <div className = 'logo'>
                            <img src = {require('/Users/ashley/Queer Community App/Queer Community App Frontend/queer-community-app-frontend/src/Unicorn Logo.png')} alt = 'unicorn logo' />
                            <h1 className = 'title'>gayety</h1>
                            {/* Gayety (Gaiety) */}
                        </div>
                        <form
                            onSubmit = {this.login}
                        >
                            <fieldset>
                                <label htmlFor = 'usernameField'>Username</label>
                                <input
                                    className = 'input login-input'
                                    type = 'text'
                                    placeholder = 'Username'
                                    id = 'usernameField'
                                    name = 'username'
                                    onChange = {this.handleChange}
                                    value = {this.state.username}
                                />
                                <br />
                                <label htmlFor = 'passwordField'>Password</label>
                                <input
                                    className = 'input login-input'
                                    type = 'password'
                                    placeholder = 'Password'
                                    id = 'passwordField'
                                    name = 'password'
                                    onChange = {this.handleChange}
                                    value = {this.state.password}
                                />
                                <br />
                                <div className = 'buttons'>
                                    <input className = 'button login-button' type = 'submit' value = 'Login' onClick = {this.login} />
                                    <input className = 'button signup-button' type = 'submit' value = 'Sign Up' />
                                </div>
                            </fieldset>
                        </form>
                    </div>
                    <div className = 'column login-right-column'>
                        <div className = 'overlay'>
                            <div className = 'text-block'>
                                <h1 className = 'title'>gayety <em className = 'is-size-6'><span>noun</span></em></h1>
                                <span>gay·ety</span>
                                <br />
                                <em className = 'definition is-size-7'>the state or quality of being lighthearted or cheerful.</em>
                                <h3 className = 'is-size-6'>1: <span className = 'is-size-6'>MERRYMAKING</span></h3>
                                also : festive activity —often used in plural
                                <h3>2: high spirits : <span>MERRIMENT</span></h3>
                                <h3 className = 'is-size-6'>3: <span>ELEGANCE, FINERY</span></h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login