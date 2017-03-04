import React from 'react';
import BookList from './BookList';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../actions';

class App extends React.Component {
  componentDidMount() {
    this.props.actions.fetchBooks();
  }

  deleteBook = (bookId) => {
    this.props.actions.deleteBook(bookId);
  };

  render() {
    return (
      <div className="App">
        <h2>Book Store</h2>
        { this.props.currentError &&
          <div style={{color: 'red'}}>
            {this.props.currentError}
          </div>
         }
        { this.props.showLoader ?
          <div>Loading....</div> :
          <BookList
            deleteBook={this.deleteBook}
            books={this.props.books} /> }
        <hr />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ...state
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
