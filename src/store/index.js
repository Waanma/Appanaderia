import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { CategoriesReducer, productsReducer, cartReducer } from './reducers';

const rootReducer = combineReducers({
  categories: CategoriesReducer,
  products: productsReducer,
  cart: cartReducer,
});

export default createStore(rootReducer, applyMiddleware(thunk));
