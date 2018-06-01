import { createAction, handleActions } from 'redux-actions';
import { pender } from 'redux-pender';
import update from 'react-addons-update';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8080';

const FAVORITE = 'todo/favorite';
const CHANGE = 'todo/CHANGE';
const FIND = 'todo/FIND';
const CREATE = 'todo/CREATE';
const SAVE = 'todo/SAVE';
const REMOVE = 'todo/REMOVE';

export const favorite = createAction(FAVORITE);
export const change = createAction(CHANGE);
export const find = createAction(FIND, () => axios.get(`/todo`));
export const create = createAction(CREATE, data => axios.post(`/todo`, data));
export const save = createAction(SAVE, (_id, data) => axios.put(`/todo/${_id}`, data));
export const remove = createAction(REMOVE, _id => axios.delete(`/todo/${_id}`));

const init = {
  isFavorite: false,
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
  [FAVORITE]: (state, action) => {
    console.log('FAVORITE');

    return update(state, {
      isFavorite: { $set: action.payload }
    });
  },
  ...pender({
    type: FIND,
    onSuccess: (state, action) => {
      console.log('FIND');

      const { payload: { data } } = action;
      const newList = data.map((item) => {
        return Object.assign(item, { open: false });
      });

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