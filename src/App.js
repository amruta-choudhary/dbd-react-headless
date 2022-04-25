import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import {
  PasswordReset
} from 'react-cognito';

import Dashboard from './components/Dashboard/Dashboard';
import RegisterForm from './components/Register/RegisterForm';
import ChangePasswordForm from './components/ChangePasswordForm/ChangePasswordForm';
import UpdateEmailForm from './components/UpdateEmailForm/UpdateEmailForm';
import PasswordResetForm from './components/PasswordResetForm/PasswordResetForm';

const changePassword = () => (
    <div>
      <ChangePasswordForm />
      <Link to="/">Home</Link>
    </div>
);

const updateEmail = () => (
    <div>
      <UpdateEmailForm />
      <Link to="/">Home</Link>
    </div>
);

const passwordReset = () => (
  <PasswordReset>
      <PasswordResetForm/>
    </PasswordReset>
);

const registerForm = () => (
    <div>
      {/* <p>Complete this form</p> */}
      <RegisterForm />
      {/* <Link to="/">Home</Link> */}
    </div>
);


class App extends Component {
  render() {
    return (
      <Router>
		<div>
		  <Route exact path="/" component={Dashboard}/>
		  <Route exact path="/register" component={registerForm}/>
		  <Route exact path="/reset" component={passwordReset}/>
		  <Route exact path="/change_password" component={changePassword}/>
		  <Route exact path="/change_email" component={updateEmail}/>
		</div>
	</Router>
    );
  }
}

export default App;
