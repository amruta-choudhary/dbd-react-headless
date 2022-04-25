import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { registerUser } from 'react-cognito';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import './register.css'
class RegisterForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      error: '',
      username: '',
      password: '',
      email: '',
    };
  }

  static propTypes = {
    history: PropTypes.object.isRequired,
  }

  onSubmit = (event) => {
    const { store } = this.context;
    const state = store.getState();
    const userPool = state.cognito.userPool;
    const config = state.cognito.config;
    event.preventDefault();
    registerUser(userPool, config, this.state.username, this.state.password, {
      email: this.state.email,
    }).then(
      (action) => {
        store.dispatch(action);
        this.props.history.push('/');
      },
      error => this.setState({ error }));
  }

  changeUsername = (event) => {
    this.setState({ username: event.target.value });
  }

  changePassword = (event) => {
    this.setState({ password: event.target.value });
  }

  changeEmail = (event) => {
    this.setState({ email: event.target.value });
  }

  render = () => (
    <div className="log-form">
      <h2>Create your account</h2>
    <form onSubmit={this.onSubmit}>
      <div>{this.state.error}</div>
      <label>
        Username
        <input  onChange={this.changeUsername} required />
      </label>
      <label>
        Password
        <input  onChange={this.changePassword} required />
      </label>
      <label>
        Email Address
        <input  type="email" onChange={this.changeEmail} required />
      </label>
      {/* <button type="submit">Register</button> */}
      <button type="submit" className="btn">Register</button>
      <Link class="forgot" to="/">Old user?Login</Link>
    </form>
    </div>
  )
}
RegisterForm.contextTypes = {
  store: PropTypes.object,
};

export default withRouter(RegisterForm);

