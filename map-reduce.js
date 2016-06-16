'use strict'

const reducer = (state, action) => {
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
  // console.log(action.type, action.value)
  console.log(nextState)
  return nextState;
}

const dispatch = (state, actions) => {
  let initialState = state || {
    x: 0,
    y: 0
  }
  return actions.reduce(reducer, initialState)
}

module.exports = {
  dispatch,
  reducer
}
