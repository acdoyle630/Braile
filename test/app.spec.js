/* jshint esversion: 6*/

const chai = require('chai');
const expect = chai.expect;

const app = require('../app.js');

describe('app', () => {
  it('should be a function', () =>{
    expect(app).to.be.a('function');
  });
  it('should return true if find is contained in str', () =>{
    expect(app('phone', 'one')).to.be.equal(true);
  });
  it('should be circular',() => {
    expect(app('wonky', 'kyw')).to.be.equal(true);
  });
});