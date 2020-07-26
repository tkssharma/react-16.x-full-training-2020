import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const EventItem = (props) => {
  return (
    <li>
      <strong>{props.name}</strong><br />
      <button onClick={props.onDeleteClicked.bind(this, props.id)}>Usuń</button>
      <Link to={'/details/' + props.id}>Szczegóły</Link>
    </li>
  );
};

EventItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  place: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  onDeleteClicked: PropTypes.func.isRequired
};

export default EventItem;
