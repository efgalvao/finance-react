import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      errors: ''
    };
  };

  handleChange = (event) => {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  };

  handleSubmit = (event) => {
    event.preventDefault()
    const { username, password } = this.state
    let user = {
      username: username,
      password: password
    }

    axios.post('http://localhost:3000/login', { user }, { withCredentials: true })
      .then(response => {
        if (response.data.logged_in) {
          this.redirect()
        } else {
          this.setState({
            errors: response.data.errors
          });
        }
      })
      .catch(error => console.log('api errors:', error))
  };

  redirect = () => {
    window.location.href = '/welcome';
  };

  handleErrors = () => {
    if (this.state.errors.length > 0) {
      return (
        <div>
          <ul>
            {this.state.errors.map(error => {
              return <li key={error}>{error}</li>
            })}
          </ul>
        </div>
      )
    };
  };

  render() {
    const { username, password, errors } = this.state
    return (
      <div>
        <h1>Log In</h1>
        {this.handleErrors()}
        <form onSubmit={this.handleSubmit}>
          <input
            placeholder="username"
            type="text"
            name="username"
            value={username}
            onChange={this.handleChange}
          />
          <input
            placeholder="password"
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
          />
          <button placeholder="submit" type="submit">
            Log In
          </button>
          <div>
            or <Link to='/signup'>sign up</Link>
            or <Link to='/logout'>log out</Link>
            or <Link to='/'>Home</Link>

          </div>

        </form>
      </div>
    );
  }
}
export default Login;
