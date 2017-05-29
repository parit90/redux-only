import { combineReducers } from 'redux';
import BookReduces from './reducer_books';
import ActiveBookReducer from './reducer_active_book';


const rootReducer = combineReducers({
  books:BookReduces,
  activeBook: ActiveBookReducer
});

export default rootReducer;
