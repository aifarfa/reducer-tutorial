'use strict'
const chai = require('chai')
const redux = require('redux')
const sinon = require('sinon')

const assert = chai.assert;
const expect = chai.expect;

describe('app root', () => {
  let app;
  let spy;

  beforeEach('spy on createStore', () => {
    spy = sinon.spy(redux, 'createStore')
    app = require('../app');
  })

  afterEach(() => {
    spy.restore()
  })

  it('get the store ready for provider', () => {
    sinon.assert.calledOnce(spy);
    assert.ok(app.initialState);
    assert.ok(app.store);
  })

  it('defines initialState', () => {
    let state = app.store.getState();
    expect(state).to.be.ok
  })

})
