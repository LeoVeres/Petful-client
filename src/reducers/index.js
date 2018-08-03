import { combineReducers } from 'redux';
import cat from './cats';
import dog from './dogs';

const reducers = combineReducers({
  cat,
  dog
});

export default reducers;