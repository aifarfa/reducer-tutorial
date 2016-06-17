/**
 * this is a part of root component
 * see:(http://redux.js.org/docs/introduction/Ecosystem.html)
 * It creates the store, telling it what reducer to use,
 * and brings together the view layer binding and the views.
 */

'use strict'

const redux = require('redux')
const reducer = require('./reducers')

// initialise state
const initialState = {
  history: [],
  position: {
    x: 0,
    y: 0
  }
}

// get the store ready.
let store = redux.createStore(reducer, initialState)

module.exports = {
  initialState,
  store
}
