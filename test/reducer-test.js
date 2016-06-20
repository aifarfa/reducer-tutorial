'use strict'
const chai = require('chai')
const expect = chai.expect

describe('reducer in action!', () => {

  const initialState = {
    history: [],
    position: {
      x: 0,
      y: 0
    }
  }

  let actions = [{
    type: 'UP',
    value: 1
  }, {
    type: 'RIGHT',
    value: 2
  }, {
    type: 'DOWN',
    value: 2
  }, {
    type: 'RIGHT',
    value: 1
  }]

  let dispatch;
  let reducer;

  beforeEach(() => {
    reducer = require('../reducers');
    dispatch = () => {
      return actions.reduce(reducer, initialState)
    }
  })

  it('returns correct final state', () => {
    let lastState = dispatch(actions)
    // console.log(lastState.position)
    expect(lastState.position.x).to.eq(3)
    expect(lastState.position.y).to.eq(-1)
  })

  it('has default state {0, 0}', () => {
    let action = {
      type: 'STOP'
    };
    let lastState = reducer(initialState, action); // don't move
    expect(lastState.position.x).to.eq(0)
    expect(lastState.position.y).to.eq(0)
  })

  it('store historical movement', () => {
    let lastState = dispatch(actions)
    let history = lastState.history

    // console.log(history)
    expect(history.length).to.eq(4)
    expect(history[0].x).to.eq(0)
    expect(history[1].x).to.eq(0)
    expect(history[2].x).to.eq(2)
    expect(history[3].x).to.eq(2)
  })

  it("doesn't mutate previous state", () => {
    let action = {
      type: 'UP',
      value: 5
    }
    let state = dispatch(actions)
    let nextState = reducer(state, action)
    // console.log(state.position)
    // console.log(nextState.position)
    expect(state).to.not.eql(nextState)
    expect(nextState.history.length).to.eq(5)
    expect(nextState.history[4]).to.eq(state.position)
  })

});
