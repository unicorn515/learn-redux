const reducer = (state, action) => {
  switch (action.type) {
  case 'decrement':
    return Object.assign({}, state, {
      test: state.test -1,
    });
  case 'increment':
    return Object.assign({}, state, {
      test: state.test + action.incrementValue,
    });
  default:
    return Object.assign({}, state);
  }
};

export default reducer;
