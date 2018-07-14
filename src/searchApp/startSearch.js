module.exports = (currState, action) => {
  if(action.type !== 'START_SEARCH') return currState;

  const searching = true;
  return {...currState, searching};
};
