import React from 'react';
import BookList from './BookList';

import * as api from '../../api/data';

class App extends React.Component {
  state = {
    books: api.getBookList()
  };
  deleteBook = (bookId) => {
    api.deleteBook(bookId);

    this.setState(prevState => ({
      books: prevState.books.filter(book => book.id !== bookId)
    }));
  };
  render() {
    return (
      <div className="App">
        <BookList
          deleteBook={this.deleteBook}
          books={this.state.books} />
      </div>
    );
  }
}

export default App;
