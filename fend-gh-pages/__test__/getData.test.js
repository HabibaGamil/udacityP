import "@babel/polyfill";
const request = require('supertest')
const server = require('../src/server/index.js');

describe('get request from sever', () => {

    it('should be defined', async () => {
      const res = await request(server)
        .get('/')
    expect(res).toBeDefined()
    
    })

  })



