module.exports = (currState, action) => {
  if(action.type !== 'SEARCH_COMPLETE') return currState;

  const searching = false;
  const {searchResults} = action;
  return {...currState, searching, searchResults};
}
