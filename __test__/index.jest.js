const request = require('supertest');
const app = require('./../client/src/index.jsx');
const React = require('react');
const {shallow} = require('enzyme');
const connection = require('./../db/connection.js')


describe('GET /', () => {
  test('successfully makeas get request to server', done =>{
    request(app)
      .get('/')
      .end((err, response) => {
        expect(response.body.name).toEqual('Zubzen');
        expect(response.body.summary).toEqual('ENTIRE LOFT IN CANCUN');
        expect(response.body.description).toEqual('Lounge in the Hammock of a Designer Apartment');
        expect(response.body.star).toEqual(5);
        expect(response.body.reviews).toEqual(184);
        exepect(response.statusCode).toBe(200);
        done();
      })
  })
})