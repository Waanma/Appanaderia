import { FIREBASE_AUTH_SIGN_IN_URL, FIREBASE_AUTH_SIGN_UP_URL } from '../../constants/firebase';
import { authTypes } from '../types';

const { SIGN_IN, SIGN_UP } = authTypes;

export const signUp = ({ email, password }) => {
  return async (dispatch) => {
    try {
      const response = await fetch(FIREBASE_AUTH_SIGN_UP_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password, returnSecurityToken: true }),
      });

      if (!response.ok) {
        throw Error('Something went wrong!');
      }

      const data = await response.json();

      dispatch({
        type: SIGN_UP,
        token: data.idToken,
        userId: data.localId,
      });
    } catch (error) {
      throw error;
    }
  };
};
