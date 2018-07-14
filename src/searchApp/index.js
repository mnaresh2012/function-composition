const searchTermChanged = require('./searchTermChanged');
const startSearch = require('./startSearch');
const searchComplete = require('./searchComplete');

module.exports = (currState = {}, action) => {
  switch(action.type) {
    case 'SEARCH_TERM_CHANGED':
      return searchTermChanged(currState, action);
    case 'START_SEARCH':
      return startSearch(currState, action);
    case 'SEARCH_COMPLETE':
      return searchComplete(currState, action);
    default:
      return currState;
  }
};
