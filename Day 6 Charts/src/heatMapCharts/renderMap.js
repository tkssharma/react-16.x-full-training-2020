import React from 'react';
import ReactHeatmap from './heatMap';

class ReactHeatmapExample extends React.PureComponent {

  render() {
    const config = {
      radius: 10,
      maxOpacity: 0.5,
      minOpacity: 0,
      blur: 0.75
    };
    const points = [];
    const width = 748;
    const height = 400;
    let max = 0;
    let len = this.props.len;

    while (len--) {
      const val = Math.floor(Math.random() * 100);
      // now also with custom radius
      const radius = Math.floor(Math.random() * 70);

      max = Math.max(max, val);
      const point = {
        x: Math.floor(Math.random() * width),
        y: Math.floor(Math.random() * height),
        value: val,
        // radius configuration on point basis
        radius
      };
      points.push(point);
    }

    return (
      <div style={{ width: '748px', height: '400px' }}>
         <div className="panel-heading">Heat Map Mar 11th 2019</div>
        <ReactHeatmap configObject={config} max={max} data={points} />
      </div >
    );
  }
}


export default ReactHeatmapExample;