const request = require('supertest');
const app = require('./../client/src/index.jsx');
// const React = require('react');
// const {shallow} = require('enzyme');
// const connection = require('./../db/connection.js')


describe('GET /', () => {
  test('successfully makes get request to server', () => {
    return request(app)
      .get('/listings')
      .then((err, response) => {
        expect(response.body.name).toEqual('Zubzen');
        expect(response.body.summary).toEqual('ENTIRE LOFT IN CANCUN');
        expect(response.body.description).toEqual('Lounge in the Hammock of a Designer Apartment');
        expect(response.body.star).toEqual(5);
        expect(response.body.reviews).toEqual(184);
        expect(response.statusCode).toBe(200);
      });
    });
});