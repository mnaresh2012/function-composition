module.exports = (currState = {}, action) => {
  return action.type === 'SEARCH_TERM_CHANGED'
  ? {...currState, searchTerm: action.searchTerm} 
  : currState;
};

//{...currState, searchTerm: action.searchTerm}