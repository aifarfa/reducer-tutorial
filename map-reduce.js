'use strict'
const assign = require('object-assign')

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

const reducer = (state, action) => {
  let nextState = cloneState(state)

  switch (action.type) {
    case 'LEFT':
      nextState.position.x -= action.value
      break;
    case 'RIGHT':
      nextState.position.x += action.value
      break;
    case 'UP':
      nextState.position.y += action.value
      break;
    case 'DOWN':
      nextState.position.y -= action.value
      break;
    default:
      break;
  }
  // console.log(nextState.position)
  nextState.history.push(state.position)

  return nextState;
}

// const isVertical = action => _.includes(['UP', 'DOWN'], action.type)
// const isHorizontal = action => _.includes(['LEFT', 'RIGHT'], action.type)

// const scaleX = action => action.type === 'RIGHT' ? action.value : -action.value
// const scaleY = action => action.type === 'UP' ? action.value : -action.value

const dispatch = (state, actions) => {
  state = state || {}
  const initialState = assign(state, defaultState)

  // const addDistance = (current, value) => current + value
  // const vectorX = actions
  //   .filter(isHorizontal)
  //   .map(scaleX)
  //   .reduce(addDistance, 0)

  // const vectorY = actions
  //   .filter(isVertical)
  //   .map(scaleY)
  //   .reduce(addDistance, 0)

  // console.log('move X ->', vectorX)
  // console.log('move Y ->', vectorY)
  const nextState = actions.reduce(reducer, initialState)
  return nextState
}

module.exports = {
  dispatch,
  reducer
}
