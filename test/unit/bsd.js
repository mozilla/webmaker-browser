var bsd = require('../../lib/bsd');

bsd('bsdtest@mozillafoundation.org', function (err, body) {
  console.dir(err);
  console.dir(body);
});
