import React from 'react';
/* eslint react/no-find-dom-node:0 */
/* react/forbid-prop-types:0 */
class changeHeatMapData extends React.Component {

  render() {
    return (
      <div className="change-data-container">
            <h4>Predicted Number of Household destroyed</h4>
           <ul className="action-list">
             <li className="action-list-item">p1</li> > 100 Houses 
             <li className="action-list-item">p2</li> > 200 Houses 
             <li className="action-list-item">p3</li> > 300 Houses 
             <li className="action-list-item">p4</li> > 500 Houses 
             <li className="action-list-item">p5</li> > 1000 Houses 
           </ul>
      </div>
    );
  }
}

export default changeHeatMapData;

