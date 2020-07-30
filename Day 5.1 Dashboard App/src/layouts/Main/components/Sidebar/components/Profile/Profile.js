import React, { useContext} from 'react';
import ContainerContext from  '../../../../../../container/context';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Avatar, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: 'fit-content'
  },
  avatar: {
    width: 60,
    height: 60
  },
  name: {
    marginTop: theme.spacing(1)
  }
}));

const Profile = props => {
  const { className, ...rest } = props;
  const { state } = useContext(ContainerContext)

  const userData = {
    name: 'Test User',
    avatar: '/images/avatars/avatar_7.png',
    bio: 'Director',
    ...state.user
  };

  const classes = useStyles();

  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
      <Avatar
        alt="Person"
        className={classes.avatar}
        component={RouterLink}
        src={userData.avatar}
        to="/settings"
      />
      <Typography
        className={classes.name}
        variant="h4"
      >
        {userData.displayName}
      </Typography>
      <Typography variant="body2">{userData.email}</Typography>
    </div>
  );
};

Profile.propTypes = {
  className: PropTypes.string
};

export default Profile;
