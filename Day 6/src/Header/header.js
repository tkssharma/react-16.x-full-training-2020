import React from 'react';
import {PageHeader} from 'antd';
/* eslint react/no-find-dom-node:0 */
/* react/forbid-prop-types:0 */
class ReactHeatmap extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: null
    }
    this.handelBack = this.handelBack.bind(this);
  }
  handelBack(){}

  render() {
    return (
      <PageHeader
        onBack={this.handelBack}
        title="KPI Data"
        subTitle="AWS Demo KPIs"
      />
    );
  }
}



export default ReactHeatmap;

