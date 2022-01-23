const express = require('express');
const path = require('path');

const ngApp = express();

ngApp.use(express.static('./dist/personal-website'));

ngApp.get('/*', function (request, response) {
  response.sendFile(path.join(__dirname, '/dist/personal-website/index.html'));
});

ngApp.listen(process.env.PORT || 3000);
