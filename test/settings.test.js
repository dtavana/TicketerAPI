var app = require('../app')
var chai = require('chai').expect;
var supertest = require('supertest');
require('dotenv').config();

describe('GET /api/settings', function() {
    it('should return 200 with valid info', function(done) {
        supertest(app)
            .get('/api/settings')
            .send({
                guildid: "555833425697701889"
            })
            .expect('Content-Type', /json/)
            .expect(200, done)
    });
})