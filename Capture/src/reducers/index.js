import { combineReducers } from 'redux';
import NoteChangedReducer from './NoteChangedReducer';

 export default combineReducers({
   noteChange: NoteChangedReducer
 });
