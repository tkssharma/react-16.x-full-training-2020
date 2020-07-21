import { createStore } from 'redux';
import rootReducer from '../reducers';
// creat store using 
export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState);
  
  return store;
}