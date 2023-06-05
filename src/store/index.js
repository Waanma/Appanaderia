import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { CategoriesReducer, productsReducer, cartReducer, ordersReducer } from './reducers';

const rootReducer = combineReducers({
  categories: CategoriesReducer,
  products: productsReducer,
  cart: cartReducer,
  orders: ordersReducer,
});

export default createStore(rootReducer, applyMiddleware(thunk));