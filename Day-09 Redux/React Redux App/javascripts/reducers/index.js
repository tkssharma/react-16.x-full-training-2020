import { combineReducers } from 'redux';
import todos from './todos';

const rootReducer = combineReducers({
  todos : todos
});
// todos is state obj which our ui will need 
// rootReducer
export default rootReducer;