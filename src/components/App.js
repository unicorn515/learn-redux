import React from 'react';
import BookList from './BookList';

import storeConfig from '../store';
import * as actions from '../actions';

class App extends React.Component {
  store = storeConfig();
  state = this.store.getState();

  componentDidMount() {
    this.unsubscribe = this.store.subscribe(() => {
      this.setState(this.store.getState());
    });
    // actions.fetchBooks(this.store.dispatch);
    this.store.dispatch(actions.fetchBooks());
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  deleteBook = (bookId) => {
    this.store.dispatch(actions.deleteBook(bookId));
  };
  render() {
    return (
      <div className="App">
        <h2>Book Store</h2>
        <BookList
          deleteBook={this.deleteBook}
          books={this.state.books} />
        <hr />
      </div>
    );
  }
}

export default App;
