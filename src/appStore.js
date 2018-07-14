const { createStore } = require('redux');

const searchApp = require('./searchApp');

const store = createStore(searchApp);

module.exports = store;
