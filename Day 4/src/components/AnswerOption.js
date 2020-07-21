import React from 'react';

function AnswerOption(props) {

  return (
    <li className="answerOption">
      <button id="horizontal-list"
        type="button"
        id={props.answerType}
        value={props.index}
        className={(props.selectedAnswer === props.index) ? 'selected-btn' : '' }
        onClick={props.onAnswerSelected}
      >{props.answerContent}</button>
    </li>
  );

}

export default AnswerOption;