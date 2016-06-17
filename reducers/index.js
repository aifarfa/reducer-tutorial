'use strict'
const move = (state, action) => {
  // clone obj
  let x = state.x;
  let y = state.y;

  switch (action.type) {
    case 'LEFT':
      x -= action.value
      break;
    case 'RIGHT':
      x += action.value
      break;
    case 'UP':
      y += action.value
      break;
    case 'DOWN':
      y -= action.value
      break;
    default:
      break;
  }
  let nextState = Object.assign({}, this.state, {
    x,
    y
  });
  return nextState;
}

const reducer = (state, action) => {
  // clone obj
  let newHistory = state.history.concat([state.position]);
  let nextPosition = move(state.position, action);
  let nextState = Object.assign({}, state, {
    position: nextPosition,
    history: newHistory
  })

  return nextState;
}

module.exports = reducer
