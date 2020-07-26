import React from 'react';

function QuestionCount(props) {

  return (
    <div className="questionCount">
      Question <span>{props.counter}</span> of <span>{props.total}</span>
       {props.counter === 5 ? (<a className="result-link" href="" onClick={props.viewreults}>View Results</a>) : (<div></div>)}
    </div>
  );

}

export default QuestionCount;