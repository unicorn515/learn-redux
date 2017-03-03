import axios from 'axios';

export const types = {
  DELETE_BOOK: 'DELETE_BOOK',
  RECEIVE_DATA: 'RECEIVE_DATA'
};

export const deleteBook = (bookId) => ({
  type: types.DELETE_BOOK,
  bookId
});

// SPECIAL
// export const fetchBooks = () => {
//   return axios.get('/api/data').then(resp => {
//     return({
//       type: types.RECEIVE_DATA,
//       data: resp.data,
//     });
//   });
// };

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
