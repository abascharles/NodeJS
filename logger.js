const url = "http://mylogger.io/log";

function log(message) {
  //send an HTTP request
  console.log(message);
}

//exports an object (log) from a module
module.exports.log = log;

// exporting a single function
// module.exports = log;
