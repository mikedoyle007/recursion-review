// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  console.log(json)
  if (json === '[]') {
    return [];
  }
  if (json[0] === '{') {
    var returnObj = {};
    var key;
    var value = false;
    for (var i = 1; i < json.length; i++) {  
      if (value === false && json[i] !== ':') {
        key += json[i];
      }
      console.log(key)
    }
  }
};
