// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  var returnArr = [];
  
  var getElements = function(element, className) {
    var childClasses = element.classList;
    var temp;
    
    for (var key in childClasses) {
      if (childClasses[key] === className) {
        temp = element;
      }
    }
    
    if (temp !== undefined) { 
      returnArr.push(temp); 
    }
    
    if (element.hasChildNodes()) {
      var children = element.childNodes;
      
      for (var i = 0; i < children.length; i++) {
        getElements(children[i], className);
      }
    }
    
  };
  
  getElements(document.body, className);
  
  return returnArr;
};