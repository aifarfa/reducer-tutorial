'use strict'
const _ = require('lodash')

// const reducer = (state, action) => {
//   let nextState = {
//     x: state.x,
//     y: state.y
//   }

//   switch (action.type) {
//     case 'LEFT':
//       nextState.x -= action.value
//       break;
//     case 'RIGHT':
//       nextState.x += action.value
//       break;
//     case 'UP':
//       nextState.y += action.value
//       break;
//     case 'DOWN':
//       nextState.y -= action.value
//       break;
//     default:
//       break;
//   }

//   console.log(nextState)
//   return nextState;
// }

const isVertical = action => _.includes(['UP', 'DOWN'], action.type)
const isHorizontal = action => _.includes(['LEFT', 'RIGHT'], action.type)

const scaleX = action => action.type === 'RIGHT' ? action.value : -action.value
const scaleY = action => action.type === 'UP' ? action.value : -action.value

const dispatch = (state, actions) => {

  let current = state || {}
  let position = current.position || {
    x: 0,
    y: 0
  }

  const addDistance = (current, value) => current + value
  const vectorX = actions
    .filter(isHorizontal)
    .map(scaleX)
    .reduce(addDistance, 0)

  const vectorY = actions
    .filter(isVertical)
    .map(scaleY)
    .reduce(addDistance, 0)

  console.log('move X ->', vectorX)
  console.log('move Y ->', vectorY)

  // return actions.reduce(reducer, initialState)
  return {
    // history: state.history,
    position: {
      x: position.x + vectorX,
      y: position.y + vectorY
    }
  }
}

module.exports = {
  dispatch
}
