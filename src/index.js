const { createStore } = require('redux');

const searchApp = require('./searchApp');

const store = createStore(searchApp);

store.subscribe(() => {
  console.log('State Updated:', store.getState());
});

setTimeout(() => {
  store.dispatch({
    type: 'AN_ACTION'
  });
}, 5000);