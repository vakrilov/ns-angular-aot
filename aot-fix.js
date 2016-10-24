#!/usr/bin/env node
var glob = require("glob");
var fs = require("fs");
var fixAot = require("./aot-fix-loader");
// var replace = require("replace");

var AOT_DIR = "./src/aot";

console.log("-----  Fixup start!");

// Find file
glob.sync(AOT_DIR + "/**/*.ts").forEach(function (fileName, index, array) {
  // console.log("processing: " + fileName);
  var data = fs.readFileSync(fileName, 'utf8')

  var result = fixAot.call({ request: fileName}, data);

  fs.writeFileSync(fileName, result, 'utf8');

});

console.log("-----  Fixup done!");
