'use strict';

const supertest = require('supertest');
const { app } = require('../src/server');
const mockRequest = supertest(app);

describe('Testing validator', () => {
  describe('Get routes tests', () => {
    test('500 if no name in the query string', async () => {
      let response = await mockRequest.get('/person');
      expect(response.status).toEqual(500);
      expect(response.text).toEqual('Please enter a valid query parameter, like this: /person?name=John');
    });
  });

  describe('Name query', () => {
    test('/person route has name in query string', async () => {
      let response = await mockRequest.get('/person?name=Fred');
      expect(response.status).toEqual(200);
      expect(response.body.name).toEqual('Fred');
    });
  });
});
