import React from 'react';
import SearchBarFilter from './searchBarFilter';
import { Row, Col } from 'antd';
import HeatMapCharts from '../heatMapCharts/renderMap'
import ChangeHeatMapData from '../heatMapCharts/changeHeatMapData';
class HomePage extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      points : 40
    }
  }
  handleDataChange(){
    this.setState({points : Math.floor(Math.random() * 10 + 10)});
  }
  handleChange(val){
      this.setState({points : Math.floor(Math.random() * 90 + 10)});
  }
  render() {
    return (
      <div className="kpi-container">
        <Row>
          <Col span={16}>
            <SearchBarFilter handleDataChange={this.handleDataChange.bind(this)} handleChange={this.handleChange.bind(this)}/>
            <HeatMapCharts len ={this.state.points}/>
          </Col>
          <Col offset={1} span={7}>
              <ChangeHeatMapData />
          </Col>
        </Row>
      </div>
    );
  }
}



export default HomePage;

