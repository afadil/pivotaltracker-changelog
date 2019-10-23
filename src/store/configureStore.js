import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducer from '../reducers/rootReducer';

export default function configureStore() {
  const enhancer = composeWithDevTools(applyMiddleware(thunk));
  const store = createStore(reducer, enhancer);
  return store;
}

