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
    </div>
  );
};

Book.propTypes = {
  title: React.PropTypes.string.isRequired,
  price: React.PropTypes.number,
};

export default Book;
