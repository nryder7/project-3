import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import AuthContext from '../../contexts/AuthContext';
import AuthDropdown from '../../components/AuthDropdown/AuthDropdown';

class Navigation extends Component {
  static contextType = AuthContext;

  state = {
    collapsed: true
  }

  toggleCollapse = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    const { user } = this.context;
    const { collapsed } = this.state;
    const targetClass = `collapse navbar-collapse ${!collapsed && 'show'}`;
    const togglerClass = `navbar-toggler ${collapsed && 'collapsed'}`;

    return (
      <div className='Navigation'>
<<<<<<< HEAD
        <nav className='navbar navbar-expand-lg navbar-light bg-light mb-3'>
          <Link className='navbar-brand' to='#'>git.PPE</Link>
=======
        <nav className='navbar navbar-expand-lg mb-3'>
          <Link className='navbar-brand' to='#'><i class="fas fa-shield-virus"> Git.PPE</i></Link>
>>>>>>> 6058ab3784cf7e815b52ef05ff8ebf7a12a2dd6c
          <button className={togglerClass} onClick={this.toggleCollapse} data-toggle='collapse' data-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon'></span>
          </button>

          <div className={targetClass} id='navbarSupportedContent'>
            <ul className='navbar-nav mr-auto'>
              {/* <li className='nav-item'>
                <Link className='nav-link' to='/' onClick={this.toggleCollapse}>Home</Link>
<<<<<<< HEAD
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='#about' onClick={this.toggleCollapse}>About</Link>
              </li>
=======
              </li> */}
>>>>>>> 6058ab3784cf7e815b52ef05ff8ebf7a12a2dd6c
              {user &&
                <li className='nav-item'>
                  <Link className='nav-link' to='/secret' onClick={this.toggleCollapse}>Secret</Link>
                </li>}
            </ul>
            <ul className='navbar-nav'>
              {user
                ? <AuthDropdown onClick={this.toggleCollapse} />
                : <li className='nav-item'><Link className='nav-link' to='/login' onClick={this.toggleCollapse}>Login/Register</Link></li>}
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navigation;
