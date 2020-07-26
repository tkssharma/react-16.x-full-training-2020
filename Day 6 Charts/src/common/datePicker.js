import moment from 'moment';
import { DatePicker } from 'antd';
import React from 'react';

const { RangePicker } = DatePicker;

function range(start, end) {
  const result = [];
  for (let i = start; i < end; i++) {
    result.push(i);
  }
  return result;
}

function disabledDate(current) {
  // Can not select days before today and today
  return current && current < moment().endOf('day');
}


function disabledRangeTime(_, type) {
  if (type === 'start') {
    return {
      disabledHours: () => range(0, 60).splice(4, 20),
      disabledMinutes: () => range(30, 60),
      disabledSeconds: () => [55, 56],
    };
  }
  return {
    disabledHours: () => range(0, 60).splice(20, 4),
    disabledMinutes: () => range(0, 31),
    disabledSeconds: () => [55, 56],
  };
}

const datePicker =  (props) => {

  const  onChange = (dates, dateStrings)=> {
    props.handleDataChange();
  }
  return (
  <RangePicker
    disabledDate={disabledDate}
    disabledTime={disabledRangeTime}
    showTime={{
      hideDisabledOptions: true,
      defaultValue: [moment('00:00:00', 'HH:mm:ss'), moment('11:59:59', 'HH:mm:ss')],
    }}
    onChange= {onChange}
    format="YYYY-MM-DD HH:mm:ss"
  />
  )
}

export default datePicker;
   