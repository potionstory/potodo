import { createAction, handleActions } from 'redux-actions';
import { Pender } from 'redux-pender';
import update from 'react-addons-update';
import axios from 'axios';

const TEST = 'system/TEST';

export const test = createAction(TEST);

const init = {
  isLogin: '로그인이 되었습니다.'
};

export default handleActions({
  [TEST]: (state, action) => {
    return update(state, {
      isLogin: { $set: '하하하하하하하하하' }
    });
  }
}, init);