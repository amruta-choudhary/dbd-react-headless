import React from 'react';
import PropTypes from 'prop-types';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import './Login.css'
class LoginForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: props.email,
      username: props.username,
      password: '',
    };
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.username, this.state.password);
  }

  changeUsername = (event) => {
    this.setState({ username: event.target.value });
  }

  changePassword = (event) => {
    this.setState({ password: event.target.value });
  }

  componentWillUnmount = () => {
    this.props.clearCache();
  }

  render = () => (
   
    <div className="log-form">
      <h2>Login to your account</h2>
    <form onSubmit={this.onSubmit}>
      <div>{this.props.error}</div>
      <div>{this.state.email}</div>
      <label>
        Username
        </label>
        <input  value={this.state.username} onChange={this.changeUsername} required />
      
      <label>
        Password
        </label>
        <input  onChange={this.changePassword} type="password" required />
     
      {/* <button type="submit"></button>
       */}
       <button type="submit" className="btn">Sign in</button>
      
       <Link class="forgot" to="/reset">Forgot Password?</Link><br/><br/>
       <Link class="forgot" to="/register">New user? Create Account</Link>
       {/* <li><Link to="/register">Register</Link></li> */}
    </form>
    </div>
    
  
  )
}
LoginForm.propTypes = {
  onSubmit: PropTypes.func,
  clearCache: PropTypes.func,
  username: PropTypes.string,
  error: PropTypes.string,
  email: PropTypes.string,
};

export default LoginForm;
