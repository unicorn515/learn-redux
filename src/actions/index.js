import axios from 'axios';

export const types = {
  BOOK_DELETED: 'BOOK_DELETED',
  RECEIVE_DATA: 'RECEIVE_DATA',
  LOADING_DATA: 'LOADING_DATA',
  API_ERROR: 'API_ERROR',
};

export const reportError = () => ({
  type: types.API_ERROR,
  message: 'Something went wrong',
});

export const deleteBook = (bookId) => {
  return (dispatch) => {
    axios.delete(`/api/books/${bookId}`)
      .then(resp => {
        if (Number(resp.data.deletedBookId) === bookId) {
          dispatch({
            type: types.BOOK_DELETED,
            bookId,
          });
        }
      })
      .catch(dispatch(reportError()));
  };
};

export const fetchBooks = () => {
  return (dispatch) => {
    dispatch({
      type: types.LOADING_DATA
    });
    axios.get('/api/data').then(resp => {
      dispatch({
        type: types.RECEIVE_DATA,
        data: resp.data,
      });
    }).catch(dispatch(reportError()));
  };
};
