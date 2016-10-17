import { combineReducers } from 'redux';
import { routerReducer } from 'ng2-redux-router';


export interface IAppState {
  form1?: {
    firstName?: string;
  };
};

function formReducer(state = {firstName: 'Jim'}, action) {
  return state;
}

export const rootReducer = combineReducers<IAppState>({
  router: routerReducer,
  form1: formReducer,
});

export function deimmutify(store) {
  return {
    router: store.router,
  };
}

export function reimmutify(plain) {
  return {
    router: plain.router,
  };
}
