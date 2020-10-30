import {combineReducers} from 'redux';

const INITIAL_STATE = {
  current: [],
  possible: ['Nancy', 'Lora', 'Jef'],
};
const friendsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
export default combineReducers({
  friends: friendsReducer,
});
