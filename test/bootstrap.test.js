const Chance = require('chance');
global.chance = new Chance();
global.chai = require('chai');
global.expect = chai.expect;
global.assert = chai.assert;
global.should = chai.should();
chai.use(require('chai-things'));
global.sails = require('sails');
global.Promise = require('bluebird');
global.request = require('supertest');
global._ = require('lodash');

before((done) => {
    sails.lift({}, (err, sails) => {
        if (err) return done(err);
        return done(err, sails);
    });
});
after((done) => {
    sails.lower(done);
});
