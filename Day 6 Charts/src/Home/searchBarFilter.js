import React from 'react';
import DatePicker from '../common/datePicker';
import SelectDropDowns from '../common/select';

class SearchBarFilter extends React.Component {
  
  handleChange(data){
     this.props.handleChange(data);
  }
  handleDataChange(){
    this.props.handleDataChange();
  }
  render() {
    return (
       <div className="kpi-filter-container">
       <DatePicker  handleDataChange = {this.handleDataChange.bind(this)}/>
       <SelectDropDowns  handleChange={this.handleChange.bind(this)}/>
       </div>
    );
  }
}



export default SearchBarFilter;

