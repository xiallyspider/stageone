'use strict';
var is_exist_element = function(collection,element){
  let result = false
  let tempArr = []
  for (let x = 0; x < collection.length; x++){
    if(x%2 == 0){
      tempArr.push(collection[x])
    }
  }
  result = tempArr.includes(element)
  return result
};
module.exports = is_exist_element;
