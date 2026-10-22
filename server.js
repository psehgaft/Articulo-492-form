// Copyright 2024 Google LLC.
// SPDX-License-Identifier: Apache-2.0
// Psehgaft

const express = require('express');
const app = express();

// http://expressjs.com/en/starter/static-files.html
// The web forms live in the a942 directory.
app.use(express.static('a942'));

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function(request, response) {
  response.sendFile(__dirname + '/a942/a492_p_fisica.html');
});

const port = process.env.PORT || 3000;
const listener = app.listen(port, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});
