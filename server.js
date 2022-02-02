const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('./dist/heila'));

app.get('/*', function (request, response) {
  response.sendFile(path.join(__dirname, '/dist/heila/index.html'));
});

app.listen(process.env.PORT || 8080);
