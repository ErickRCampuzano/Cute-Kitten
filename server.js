var express = require('express');
var path = require('path');
var serveStatic = require('serve-static');
var favicon = require("express-favicon");

app = express();
app.use(serveStatic(__dirname + "/dist"));
app.use(favicon(__dirname + "/dist/favicon.ico"));
var port = process.env.PORT || 5000;
app.listen(port);
console.log('server started' + port);