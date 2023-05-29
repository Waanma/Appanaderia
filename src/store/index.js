import { createStore, combineReducers } from 'redux';

import categoriesReducer from './reducers/categories.reducer';

const rootReducer = combineReducers({
  categories: categoriesReducer,
});

export default createStore(rootReducer);