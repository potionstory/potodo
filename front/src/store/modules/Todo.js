import { createAction, handleActions } from 'redux-actions';
import { pender } from 'redux-pender';
import update from 'react-addons-update';
import axios from 'axios';

const CHANGE = 'todo/CHANGE';
const FIND = 'todo/FIND';
const CREATE = 'todo/CREATE';
const SAVE = 'todo/SAVE';
const REMOVE = 'todo/REMOVE';

export const change = createAction(CHANGE);
export const find = createAction(FIND, () => axios.get(`http://localhost:8080/todo`));
export const create = createAction(CREATE, data => axios.post(`http://localhost:8080/todo`, data));
export const save = createAction(SAVE, (_id, data) => axios.put(`http://localhost:8080/todo/${_id}`, data));
export const remove = createAction(REMOVE, _id => axios.delete(`http://localhost:8080/todo/${_id}`));

const init = {
  list: []
};

export default handleActions({
  [CHANGE]: (state, action) => {
    const { key, _id } = action.payload;
    return update(state, state.list.map(item => {
      if (item._id === _id) return item.open = key;
      return item.open = false;
    }));
  },
  ...pender({
    type: FIND,
    onSuccess: (state, action) => {
      console.log('FIND');

      const { payload: { data } } = action;
      const newList = data.map((item) => {
        return Object.assign(item, { open: false });
      });
      console.log(newList);
      return state = {
        list: newList
      };
    }
  }),
  ...pender({
    type: CREATE,
    onSuccess: (state, action) => {
      console.log('CREATE');

      return state;
    }
  }),
  ...pender({
    type: SAVE,
    onSuccess: (state, action) => {
      console.log('SAVE');

      return state;
    }
  }),
  ...pender({
    type: REMOVE,
    onSuccess: (state, action) => {
      console.log('REMOVE');

      return state;
    }
  })
}, init);