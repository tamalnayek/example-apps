

var request = require('supertest');
var app = require('../app');

describe('GET /', function () {
    it('respond with hello world', function (done) {
        //navigate to root and check the the response is "hello world"
        request(app).get('/users').expect('hello user', done);
    });
    it('should be true',()=>{
        expect(true).toBe(true)
    });
});