import { combineEpics } from 'redux-observable';
import pingEpic from './pingEpic';
import dragEpic from './dragEpic';

export default combineEpics(
  pingEpic,
  dragEpic,
);