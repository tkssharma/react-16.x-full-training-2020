import React, { useState, useContext, Fragment } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { AppBar, Toolbar, Badge, Hidden, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/NotificationsOutlined';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { SearchOutlined } from '@material-ui/icons';
import AccountCircle from '@material-ui/icons/AccountCircle';
import InputIcon from '@material-ui/icons/Input';
import ContainerContext from '../../../../container/context';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    boxShadow: 'none'
  },
  flexGrow: {
    flexGrow: 1
  },
  title: {
    color: '#ffffff',
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  brandIamge: {
    height: 50
  },
  signOutButton: {
    marginLeft: theme.spacing(1)
  }
}));

const Topbar = props => {
  const { state, handleLogout } = useContext(ContainerContext);
  const { className, onSidebarOpen, ...rest } = props;
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const [notifications] = useState([]);

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      onClose={handleMenuClose}
      open={isMenuOpen}
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  return (
    <Fragment>
      <AppBar
        {...rest}
        className={clsx(classes.root, className)}
      >
        <Toolbar>
          <RouterLink to="/">
            <Typography
              className={classes.title}
              noWrap
              variant="h2"
            >
        Dashboard
            </Typography>
          </RouterLink>
          <div className={classes.flexGrow} />

          <Hidden mdDown>
            <IconButton color="inherit">
              <Badge
                badgeContent={notifications.length}
                color="primary"
                variant="dot"
              >
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </Hidden>

          <Hidden mdDown>
            <IconButton color="inherit">
              <Badge
                badgeContent={notifications.length}
                color="primary"
                variant="dot"
              >
                <SearchOutlined />
              </Badge>
            </IconButton>
            <IconButton
              aria-controls={menuId}
              aria-haspopup="true"
              aria-label="account of current user"
              color="inherit"
              edge="end"
              onClick={handleProfileMenuOpen}
            >
              <AccountCircle />
            </IconButton>
            {state.isAuthenticated ? (
              <IconButton
                className={classes.signOutButton}
                color="inherit"
                onClick={handleLogout}
              >
                <InputIcon />
              </IconButton>
            ) : (
              ''
            )}
          </Hidden>
          <Hidden lgUp>
            <IconButton
              color="inherit"
              onClick={onSidebarOpen}
            >
              <MenuIcon />
            </IconButton>
          </Hidden>
        </Toolbar>
      </AppBar>
      {renderMenu}
    </Fragment>
  );
};

Topbar.propTypes = {
  className: PropTypes.string,
  onSidebarOpen: PropTypes.func
};

export default Topbar;
