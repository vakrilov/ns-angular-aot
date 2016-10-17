#!/usr/bin/env node
var glob = require("glob");
var fs = require("fs");
// var replace = require("replace");

var AOT_DIR = "./src/aot";

console.log("-----  Fixup start!");

// Find file
glob.sync(AOT_DIR + "/**/*.ts").forEach(function (fileName, index, array) {
  // console.log("processing: " + fileName);
  var data = fs.readFileSync(fileName, 'utf8')

  var result = data;
  result = result.replace(/(..\/)*platform\'/g, 'platform\'');
  result = result.replace(/(..\/)*ui\/frame\'/g, 'ui/frame\'');
  result = result.replace(/(..\/)*ui\/page\'/g, 'ui/page\'');

  if (data !== result) {
    console.log("Imports fixed for: " + fileName);
  }

  fs.writeFileSync(fileName, result, 'utf8');

});

console.log("-----  Fixup done!");
