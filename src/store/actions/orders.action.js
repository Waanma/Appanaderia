import { FIREBASE_REALTIME_DB_URL } from '../../constants/firebase';
import { orderTypes } from '../types';

const { GET_ORDERS, DELETE_ORDER } = orderTypes;

export const getOrders = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${FIREBASE_REALTIME_DB_URL}/orders.json`, {
        method: 'GET',
        headers: {
          'content-type': 'application/json',
        },
      });

      const result = await response.json();

      const orders = Object.keys(result).map((key) => ({
        ...result[key],
        id: key,
      }));

      dispatch({
        type: GET_ORDERS,
        orders,
      });
    } catch (error) {
      console.log('error');
    }
  };
};

export const deleteOrder = (id) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${FIREBASE_REALTIME_DB_URL}/orders/${id}.json`, {
        method: 'DELETE',
        headers: {
          'content-type': 'application/json',
        },
      });

      const result = await response.json();

      dispatch({
        type: DELETE_ORDER,
        id,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
