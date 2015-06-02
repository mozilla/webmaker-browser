var bsd = require('../../src/util/bsd');

describe('BSD', function(){
  it('should subscribe without an error', function (done) {
    bsd('bsdtest@mozillafoundation.org', function (err, body) {
      if (err) throw err;
      done();
    });
  });
});
