import React from 'react';
import BookList from './BookList';

import { getBookList } from '../../api/data';

class App extends React.Component {
  state = {
    books: getBookList()
  };
  render() {
    return (
      <div className="App">
        <BookList books={this.state.books} />
      </div>
    );
  }
}

export default App;
