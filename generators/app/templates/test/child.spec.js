'use strict';

const child = require('..').child;
const expect = require('chai').expect;

describe('child module', () => {
  
  it('should return the same as arguments', () => {
    expect(child(true)).to.equal(true);
  });

  it('so, this should not be equal', () => {
    expect(child(false)).to.not.equal(true);
  });

});