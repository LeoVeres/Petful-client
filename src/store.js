import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import Reducers from './reducers/index';
import { composeWithDevTools } from 'redux-devtools-extension';

export default createStore(
  Reducers,
  composeWithDevTools(applyMiddleware(thunk))
);