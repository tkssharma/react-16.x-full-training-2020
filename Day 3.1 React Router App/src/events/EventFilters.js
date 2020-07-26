import React from 'react';
import PropTypes from 'prop-types';

const EventFilters = (props) => {
  return <input type="text" onChange={props.onFilterChange} placeholder="filtruj..." />
};

EventFilters.propTypes = {
  onFilterChange: PropTypes.func.isRequired
};

export default EventFilters;
