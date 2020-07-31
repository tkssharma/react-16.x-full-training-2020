import React from 'react';
import loading from 'assets/imgs/loading.gif';

export default props => {
  return (
    <div className="loading">
      <img className="loading-icon" src={loading} alt=""/>
      <span className="loading-text">{props.text}</span>
    </div>
  )
}