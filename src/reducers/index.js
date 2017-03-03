import { types } from '../actions';

const reducer = (state, action) => {
  switch (action.type) {
  case types.DELETE_BOOK:
    return {
      ...state,
      books: state.books.filter(book => book.id !== action.bookId),
    };
  case types.RECEIVE_DATA:
    return {
      ...state,
      ...action.data,
    }
  default:
    return Object.assign({}, state);
  }
};

export default reducer;
