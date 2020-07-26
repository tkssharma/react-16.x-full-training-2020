import { Select } from 'antd';
import React from 'react';

const { Option, OptGroup } = Select;



const selectDropdown = (props) => {
  const handleChange = (value)=> {
    props.handleChange(value);
  }
  return (
    <Select
      defaultValue="Disaster List1"
      style={{ width: 300 }}
      onChange={handleChange}
    >
      <OptGroup label="Disaster List">
        <Option value="Disaster Country">Disaster Country</Option>
        <Option value="Disaster Region">Disaster Region</Option>
        <Option value="Disaster Area">Disaster Area</Option>
      </OptGroup>
    </Select>)
}

export default selectDropdown;