import { types } from '../actions';

const reducer = (state, action) => {
  switch (action.type) {
  case types.BOOK_DELETED:
    return {
      ...state,
      books: state.books.filter(book => book.id !== action.bookId),
      currentError: null,
    };
  case types.RECEIVE_DATA:
    return {
      ...state,
      ...action.data,
      showLoader: false,
      currentError: null,
    };
  case types.LOADING_DATA:
    return {
      ...state,
      currentError: null,
      showLoader: true,
    };
  case types.API_ERROR:
    return {
      ...state,
      showLoader: false,
      currentError: action.message,
    };
  default:
    return Object.assign({}, state);
  }
};

export default reducer;
