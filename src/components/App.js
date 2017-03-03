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
        { this.state.currentError &&
          <div style={{color: 'red'}}>
            {this.state.currentError}
          </div>
         }
        { this.state.showLoader ?
          <div>Loading....</div> :
          <BookList
            deleteBook={this.deleteBook}
            books={this.state.books} /> }
        <hr />
      </div>
    );
  }
}

export default App;
