import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Navbar.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    state = {
        anchorEl: null,
    };
    
    handleClick = event => {
      this.setState({ anchorEl: event.currentTarget });
    };
    
    handleClose = () => {
        this.setState({ anchorEl: null });
    };
    render() {
        const {isAuth} = this.props;
        const { anchorEl } = this.state;
      return (
        <AppBar position="fixed">
          <Toolbar style={{display:'flex',justifyContent: 'space-between'}}>
          <IconButton color="inherit" aria-label="Menu">
          <Link to="/" className="navbar-link">WorldLiveLinking</Link>
          </IconButton>
          {
            isAuth ?
            <div>
             <div style = {{display:'flex',alignItems:'center'}}>
                <AccountCircle />
                <Button color="inherit"
                    aria-owns={anchorEl ? 'simple-menu' : undefined}
                    aria-haspopup="true"
                    onClick={this.handleClick}
                    >
                    Joao Santos
                </Button>
              </div>
          <Menu styles={{top: '38px'}}
            id="simple-menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={this.handleClose}
          >
            <MenuItem onClick={this.handleClose}>
              <Link to="/profile" className="navbar-link">My Profile</Link>
              </MenuItem>
            <MenuItem onClick={this.handleClose}>Logout</MenuItem>
          </Menu>
            </div>
            :
            <div style={{display:'flex'}}>
              <Button color="inherit">
              <Link to="/signin" className="navbar-link">Sign In</Link>
              </Button>
              <Button color="inherit">
              <Link to="/signup" className="navbar-link">Sign Up</Link>
              </Button>
            </div>
          }
          
          </Toolbar>
        </AppBar>
    );
    }
  }  

Navbar.propTypes = {
    isAuth: PropTypes.bool.isRequired,
}

Navbar.defaultProps = {
    isAuth: false
}

export default Navbar;