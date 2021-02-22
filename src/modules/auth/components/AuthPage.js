import React from 'react';
import Login from './Login';
import Register from './Register';
import { AppConfig } from '../../../config';

const AuthPage = () => {
  return (
    <div className="row">
      <div className="col-lg-12 col-md-12">
        <div className="panel panel-primary login-container card">
          <div className="panel-heading panel-heading-primary card-header">
            Login
          </div>
          <div className="panel-body card-body">
            <Login />
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default AuthPage;
