import React from 'react';
import ReactDOM from 'react-dom';
import Heatmap from 'heatmap.js';
import propTypes from 'prop-types';

/* eslint react/no-find-dom-node:0 */
/* react/forbid-prop-types:0 */
class ReactHeatmap extends React.Component {

  static defaultProps = {
    max: 5,
    min: 0,
    data: [],
    configObject: {}
  };


  componentDidMount() {
    const configObject = Object.assign({
      container: ReactDOM.findDOMNode(this)
    }, this.props.configObject);

    this.heatmap = Heatmap.create(configObject);

    this.setData(this.props.min, this.props.max, this.props.data);
  }

  componentWillReceiveProps(nextProps) {
    this.setData(nextProps.min, nextProps.max, nextProps.data);
  }

  setData = (min, max, data) => {
    this.heatmap.setData({ min, max, data });
  }

  render() {
    return (
      <div className="heatMapbg" style={{ width: '100%', height: '100%' }} />
    );
  }
}
/* eslint react/forbid-prop-types:0 */
ReactHeatmap.propTypes = {
  max: propTypes.number,
  min: propTypes.number,
  data: propTypes.arrayOf(propTypes.object),
  configObject: propTypes.object
};


export default ReactHeatmap;

