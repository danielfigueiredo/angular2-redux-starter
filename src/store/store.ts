import { combineReducers } from 'redux';
import { routerReducer } from 'ng2-redux-router';


export interface IAppState {
};

export const rootReducer = combineReducers<IAppState>({
  router: routerReducer,
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
