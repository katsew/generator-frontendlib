'use strict';

const child = require('..').child;
const expect = require('chai').expect;

describe('Sample test', () => {
  
  it('should return the same props', () => {
    expect(child(true)).to.be(true);
  });

});