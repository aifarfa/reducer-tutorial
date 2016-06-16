'use strict'

const dispatcher = require('../map-reduce')
const dispatch = dispatcher.dispatch
const chai = require('chai')
const expect = chai.expect

describe('reducer in action!', () => {

  const actions = [{
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

  beforeEach(() => {
    this.initialState = {
      x: 0,
      y: 0
    }
  })

  it('returns correct final state', () => {
    let lastState = dispatch(this.initialState, actions)

    expect(lastState.x).to.eq(3)
    expect(lastState.y).to.eq(-1)
  })

  it('is immutable state', () => {
    let lastState = dispatch(this.initialState, actions)
    expect(this.initialState).to.not.eq(lastState)
    expect(this.initialState.x).to.eq(0)
    expect(this.initialState.y).to.eq(0)
  })

  it('has default state {0, 0}', () => {
    let lastState = dispatch(null, actions)
    expect(lastState.x).to.eq(3)
    expect(lastState.y).to.eq(-1)
  })

});
