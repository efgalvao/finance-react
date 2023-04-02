import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'

class Logout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      errors: ''
    };
  }
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

    axios.post('http://localhost:3000/logout', { user }, { withCredentials: true })
      .then(response => {
        if (response.data.logged_out) {
          this.redirect()
        } else {
          this.setState({
            errors: response.data.errors
          })
        }
      })
      .catch(error => console.log('api errors:', error))
  };
  redirect = () => {
    console.log('this.history')
    console.log(this.state)
    console.log(this.history)

    this.props.history.push('/')
  }
  handleErrors = () => {
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

  render() {
    const { username, password } = this.state
    return (
      <div>
        <h1>Log Out</h1>
        <form onSubmit={this.handleSubmit}>
          <button placeholder="submit" type="submit">
            Log Out
          </button>
          <div>
            or <Link to='/signup'>sign up</Link>
            or <Link to='/login'>Login</Link>
          </div>

        </form>
      </div>
    );
  }
}
export default Logout;
