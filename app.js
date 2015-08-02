'use strict';

var path = require('path');
var express = require('express');
var serveIndex = require('serve-index');
var port = process.env.PORT || 3000;
var app = module.exports = express();
var docroot = path.resolve(__dirname, "htdocs");

app.use(express.static(docroot));
app.use(serveIndex(docroot, { icons: true }));
app.listen(port, function(){
  console.log("Express server listening on port %d in %s mode", port, app.settings.env);
});
