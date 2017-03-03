import React from 'react';

const Book = (props) => {
  return (
    <div>
      <div className="title">
        {props.title}
      </div>
      <div className="price">
        {props.price}
      </div>
      <a href="#" onClick={() => props.deleteBook(props.id)}>
        delete
      </a>
    </div>
  );
};

Book.propTypes = {
  id: React.PropTypes.number.isRequired,
  title: React.PropTypes.string.isRequired,
  price: React.PropTypes.number,
  deleteBook: React.PropTypes.func.isRequired,
};

export default Book;
