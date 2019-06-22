const expect = require('chai').expect;
const nock = require('nock');

const { getUser } = require('./../index');
const response = require('./response');


describe('Get User tests', () => {
    it.skip('Get a user by username', () => {
        return getUser('octocat')
            .then(response => {
                expect(typeof response).to.equal('object');
                expect(response.name).to.equal('The Octocat')
                expect(response.company).to.equal('GitHub')
                expect(response.location).to.equal('San Francisco')
            })
    });
});
 

describe('Get User test', () => {
    beforeEach(() =>  {
        nock('https://api.github.com')
            .get('/users/octocat')
            .reply(200, response);
    });

    it('Get a iser by username', () => {
        return getUser('octocat')
            .then(response => {
                expect(typeof response).to.equal('object');
                expect(response.name).to.equal('The Octocat');
                expect(response.company).to.equal('GitHub');
                expect(response.location).to.equal('San Francisco');
            });
    });
});
