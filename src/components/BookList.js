import React from 'react';
import Book from './Book';

const BookList = (props) => {
  return (
    <div>
      {props.books.map(book => {
        return (
          <Book key={book.id} {...book} />
        );
      })}
    </div>
  );
};

BookList.propTypes = {
  books: React.PropTypes.array.isRequired
};

export default BookList;
