import { NOTE_CHANGED } from '../actions/types';

const INITIAL_STATE = { note: '' };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    //returns the state for the actions that happen
    case NOTE_CHANGED:
      return { ...state, note: action.payload };
    default:
      return state;
  }
};
