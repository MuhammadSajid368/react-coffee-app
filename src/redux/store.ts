import { createStore } from 'redux';
import reducer from './reducer';

// Initializing the Redux store
const store = createStore(
  reducer, 
);

export default store;
