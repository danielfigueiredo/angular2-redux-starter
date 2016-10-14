import {combineEpics} from 'redux-observable';
import racesEpics from './races';

export const rootEpic = combineEpics(
  racesEpics
);
