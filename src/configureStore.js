import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import pingEpic from './pingEpic';
import pingReducer from './pingReducer';
const epicMiddleware = createEpicMiddleware();

const store = createStore(pingReducer,
  applyMiddleware(epicMiddleware)
);

epicMiddleware.run(pingEpic);
export default store;