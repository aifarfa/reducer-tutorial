'use strict'

const reducer = (state, action) => {
  let nextState = state

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
  console.log(action.type, action.value)
  console.log(nextState)
  return nextState;
}

const dispatch = (state, actions) => {
  return actions.reduce(reducer, state)
}

module.exports = {
  dispatch,
  reducer
}
