import axios from 'axios';

export const types = {
  BOOK_DELETED: 'BOOK_DELETED',
  RECEIVE_DATA: 'RECEIVE_DATA'
};

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
      });
  };
};

export const fetchBooks = () => {
  return (dispatch) => {
    axios.get('/api/data').then(resp => {
      dispatch({
        type: types.RECEIVE_DATA,
        data: resp.data,
      });
    });
  };
};
