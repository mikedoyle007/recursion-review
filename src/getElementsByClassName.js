// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  var returnArr = [];
  var docBod = document.body;
  var getElements = function(element, className) {
    var childClasses = element.classList;
    for (var key in childClasses) {
      if (childClasses[key] === className) {
        returnArr.push(element);
      }
    }
    if (element.hasChildNodes()) {
      var children = element.childNodes;
      children.forEach(function(elem) {
        getElements(elem, className);
      });
    }
  };
  getElements(docBod, className);
  return returnArr;
};

