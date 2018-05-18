import { createAction, handleAction, handleActions } from 'redux-actions';
import { pender } from 'redux-pender';
import update from 'react-addons-update';
import axios from 'axios';

const LOADING = 'system/LOADING';
const FIND = 'system/FIND';

export const loading = createAction(LOADING);
export const find = createAction(FIND, data => axios.post('http://localhost:8080/todo', data));

const init = {
  isLoading: false,
  data: {}
};

export default handleActions({
  [LOADING]: (state, action) => {
    return update(state, {
      isLoading: { $set: !state.isLoading }
    });
  },
  ...pender({
    type: FIND,
    onPending: (state, action) => {
      console.log('실행중');
      return state;
    },
    onSuccess: (state, action) => {
      const { payload: { data } } = action;
      return update(state, {
        data: { $set: data }
      });
    },
    onFailure: (state, action) => {
      console.log('실패');
      return state;
    }
  })
}, init);