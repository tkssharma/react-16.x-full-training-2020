import React from 'react';
import PropTypes from 'prop-types';

const EventAdd = (props) => {
  return (
    <form onSubmit={props.onFormSubmit}>
      <input id="name" type="text" placeholder="Nazwa..." value={props.name} onChange={props.onFieldChange.bind(this, 'name')} />
      <label style={props.nameValid ? { display: 'none' } : { display: 'inline' }} htmlFor="name">Pole jest wymagane!</label><br />
      <input id="place" type="text" placeholder="Miejsce..." value={props.place} onChange={props.onFieldChange.bind(this, 'place')} />
      <label style={props.placeValid ? { display: 'none' } : { display: 'inline' }} htmlFor="place">Pole jest wymagane!</label><br />
      <input id="date" type="text" placeholder="Data..." value={props.date} onChange={props.onFieldChange.bind(this, 'date')} />
      <label style={props.dateValid ? { display: 'none' } : { display: 'inline' }} htmlFor="date">Pole jest wymagane!</label><br />
      <input id="time" type="text" placeholder="Godzina..." value={props.time} onChange={props.onFieldChange.bind(this, 'time')} />
      <label style={props.timeValid ? { display: 'none' } : { display: 'inline' }} htmlFor="time">Pole jest wymagane!</label><br />
      <button type="submit">Dodaj</button>
    </form>
  );
}

export default EventAdd;
