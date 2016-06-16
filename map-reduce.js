'use strict'
const _ = require('lodash')

const defaultState = {
  history: [],
  position: {
    x: 0,
    y: 0
  }
}

const cloneState = state => {
  return {
    history: state.history.concat([]), // returns new array
    position: {
      x: state.position.x,
      y: state.position.y
    }
  }
}
const movement = ['UP', 'DOWN', 'LEFT', 'RIGHT']
const isMoving = type => _.includes(movement, type)
const move = (state, action) => {
  // clone obj
  let nextState = {
    x: state.x,
    y: state.y
  }

  switch (action.type) {
    case 'LEFT':
      nextState.x -= action.value
      break;
    case 'RIGHT':
      nextState.x += action.value
      break;
    case 'UP':
      nextState.y += action.value
      break;
    case 'DOWN':
      nextState.y -= action.value
      break;
    default:
      break;
  }
  return nextState;
}

const reducer = (state, action) => {
  let nextState = cloneState(state)

  if (isMoving(action.type)) {
    let position = nextState.position // select sub state
    let nextPosition = move(position, action) // parse to movement reducer
    nextState.position = nextPosition
    nextState.history.push(state.position)
  }

  return nextState
}

const dispatch = (actions) => {
  const initialState = defaultState // TODO: retrieve state from store..
  const nextState = actions.reduce(reducer, initialState)
  return nextState
}

module.exports = {
  dispatch,
  reducer
}
