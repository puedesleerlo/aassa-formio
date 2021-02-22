import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { logout } from 'react-formio';
import { useAuth } from '../../modules/auth';

const Header = () => {
  const { state: authState, dispatch } = useAuth();
  console.log(authState)
  const onLogout = () => {
    logout()(dispatch);
  };

  return (
     <nav className="navbar navbar-expand-lg">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img className="logo" alt="AASSA" src="https://www.aassa.com.co/wp-content/themes/plantilla1/images/logo.png" height="25px" />
          </Link>
          <ul className="nav navbar-nav mr-auto">
            <NavLink exact to="/" role="navigation button" className="nav-link">
              <span className="fa fa-home" />
            </NavLink>
            { (authState.is.hasOwnProperty('administrator') && authState.is.administrator) ? (
              <NavLink to="/form" role="navigation link" className="nav-link">
                <i className="fa fa-wpforms"></i>&nbsp;
                Forms
              </NavLink>
            ) : null }
            { authState.authenticated ? (
              <NavLink to="/controldiario" role="navigation link" className="nav-link">
                <i className="fa fa-calendar"></i>&nbsp;
                Control diario de calidad del agua
              </NavLink>
            ) : null }
          </ul>
          <ul className="nav navbar-nav ml-auto">
            { authState.authenticated ? (
              <li className="nav-item">
                <span className="nav-link" role="navigation link" onClick={onLogout}>
                  <span className="fa fa-sign-out" />&nbsp;
                  Logout
                </span>
              </li>
            ) : (
              <NavLink to="/auth" role="navigation link" className="nav-link">
                Login | Register
              </NavLink>
            )}
          </ul>
        </div>
      </nav>
  );
};

export default Header;
