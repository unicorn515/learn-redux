import React from 'react';
import Book from './Book';

const BookList = (props) => {
  return (
    <div>
      {props.books.map(book => {
        return (
          <Book key={book.id}
            deleteBook={props.deleteBook}
            {...book} />
        );
      })}
    </div>
  );
};

BookList.propTypes = {
  books: React.PropTypes.array.isRequired,
  deleteBook: React.PropTypes.func.isRequired,
};

export default BookList;
