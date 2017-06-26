// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  console.log(obj);
  var returnObj = '';
  if (Array.isArray(obj)) {
    if (obj.length === 0) {
      return '[]';
    } 
    if (obj.length) {
      returnObj = '[';
      for (var i = 0; i < obj.length; i++) {
        
        returnObj += stringifyJSON(obj[i]) + ',';
      }
      returnObj = returnObj.slice(0, -1);
      returnObj += ']';
      return returnObj;
    }
  }
  if (typeof obj === 'object' && obj !== null) {
    if (Object.keys(obj).length === 0) {
      return '{}';
    } else {
      returnObj = '{';
      for (var key in obj) {
        if (key === 'functions' || key === 'undefined') {
          return '{}';
        }
        returnObj += stringifyJSON(key) + ':' + stringifyJSON(obj[key]) + ',';
      }
      returnObj = returnObj.slice(0, -1);
      returnObj += '}';
    }
  }
  if (typeof obj === 'number' || typeof obj === 'boolean') {
    returnObj = "" + obj;
  }
  if (obj === null) {
    return 'null';
  }
  if (typeof obj === 'string') {
    return '"' + obj + '"';
  }
  return returnObj;
};
