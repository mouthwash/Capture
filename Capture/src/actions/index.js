import { NOTE_CHANGED } from './types';

export const noteChanged = (text) => {
  return {
    type: NOTE_CHANGED,
    payload: text
  };
};
