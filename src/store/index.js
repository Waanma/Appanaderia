import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import {
  CategoriesReducer,
  productsReducer,
  cartReducer,
  ordersReducer,
  authReducer,
} from './reducers';

const rootReducer = combineReducers({
  categories: CategoriesReducer,
  products: productsReducer,
  cart: cartReducer,
  orders: ordersReducer,
  auth: authReducer,
});

export default createStore(rootReducer, applyMiddleware(thunk));
