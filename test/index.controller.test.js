const { expect } = require('chai');
const sinon = require('sinon');
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}
const index = require('../app/controllers/index.js');

describe('index controller', function() {
  it('should return index route with correct response', function() {
    const req = {};
    const res = { send: sinon.spy() };

    index(req, res);

    expect(res.send.firstCall.args[0])
      .to.deep.equal({ mapDatasetsUrl: `${process.env.SERVER_URL}/map-datasets` });
  });
});
