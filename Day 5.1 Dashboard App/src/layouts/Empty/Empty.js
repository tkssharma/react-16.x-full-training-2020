import React from 'react';
import PropTypes from 'prop-types';
const Empty = props => {
  const { children } = props;
  return (
    <div>
      {children}
    </div>
  );
};

Empty.propTypes = {
  children: PropTypes.node
};

export default Empty;
